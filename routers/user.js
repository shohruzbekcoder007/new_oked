const express = require('express')
const router = express.Router()
const _ = require('lodash')
const bcrypt = require('bcryptjs')
const { cookieJwtAuth } = require('./../middleware/cookieJwtAuth.middleware')
const { User } = require('./../models/user')
const axios = require('axios')

router.post('/', cookieJwtAuth, async (req, res) => {

    try {

        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password, salt)

        let user = new User(req.body)
        let new_user = await user.save()

        return res.send(new_user)

    } catch (err) {
        return res.send("Tizimda xatolik yuzaga keldi")
    }

})

router.post('/login', async (req, res) => {

    let user = await User.findOne({ user_name: req.body.user_name });
    if (!user)
        return res.render('login', {
            message: 'Email yoki parol noto\'g\'ri'
        })

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword){
        return res.render('login', {
            message: 'Email yoki parol noto\'g\'ri'
        })
    } else {
        const token = user.generateAuthToken();
        res.cookie("token", token, {
            httpOnly: true,
            // secure: true,
            // maxAge: 1000000,
            // signed: true
        })

        const result = await axios.get("http://172.16.11.14:9080/v1/skp_root/");

        return res.render('main', {
            name: user.name,
            organizations: result.data.results,
            page: 1,
            nextpage: true && result.data.next,
            perpage: true && result.data.previous
        })
    }

})

module.exports = router;