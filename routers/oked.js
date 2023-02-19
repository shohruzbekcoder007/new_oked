const express = require('express')
const router = express.Router()
const _ = require('lodash')
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth.middleware')
const axios = require('axios')
const { getSKP, whoIsWho, finallycounter, delay } = require('./../logic/logic')
const { OkedInformation } = require('./../models/oked_information')

router.get('/calculate', cookieJwtAuth, async (req, res) => {

    const result = await axios.get(`http://172.16.11.14:9080/v1/skp_report/?root=${req.query.link}`);

    const resultoked = getSKP(result.data.results)

    let data = {}

    if (resultoked.skp != "" && resultoked.vResult != 0) {
        data.skp=resultoked.skp
        data.oked=''
    } else {
        data.skp=''
        data.oked=req.query.oked
    }

    // return res.send(data)

    const mainresult = await axios.get(`http://172.16.11.14:9080/v1/reports/skp/?oked=${data.oked}&skp=${data.skp}`)
    let whiiswho = whoIsWho(mainresult.data[0].limitition, result.data.results)
    whiiswho.attempts = req.query.attempts
    whiiswho.inn = req.query.inn
    whiiswho.oldOked = req.query.oked
    whiiswho.okpo = req.query.okpo
    whiiswho.newOked = mainresult.data[0].oked
    let okedInformation = new OkedInformation(whiiswho)

    const oldResult = await OkedInformation.findOne({ inn: req.query.inn })
        if (oldResult == null || oldResult.attempts < req.query.attempts) {
            await okedInformation.save()
        }
    return res.render('oneOked', {
        org: okedInformation
    })
})

router.get('/calculates', cookieJwtAuth, async (req, res) => {
    return res.send(finallycounter(req.query.link, req.query.oked, req.query.attempts))
})

router.get('/nextpage', cookieJwtAuth, async (req, res) => {

    const result = await axios.get(`http://172.16.11.14:9080/v1/skp_root/?page=${req.query.page}`);

        return res.render('main', {
            name: req.user.name,
            organizations: result.data.results,
            page: parseInt(req.query.page),
            nextpage: true && result.data.next,
            perpage: true && result.data.previous
        })
})


router.get('/allokeds', cookieJwtAuth, async (req, res) => {
    let result = await axios.get("http://172.16.11.14:9080/v1/skp_root/")
    for (let ind = 0; ind < Math.ceil(result.data.count/10); ind++) {
        result = await axios.get(`http://172.16.11.14:9080/v1/skp_root/?page=${ind+1}`)
        await result.data.results.forEach(
            async result => {
                await finallycounter(result.id, result.oked, result.attempts, result.inn, result.oked, result.okpo)
            }
        )
        await delay(500);
    }
    
    return res.send("111-"+result.data.count)
})

module.exports = router;