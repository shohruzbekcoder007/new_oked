const { OkedInformation } = require('../models/oked_information')
const axios = require('axios')

const getSKP = (data) => {

    let titul_section, bob_1, bob_2, bob_3, bob_4, bob_5, bob_6, bob_7, bob_8, bob_9, bob_10, bob_11,
        bob_12_p1, bob_12_p2, bob_13_p3, bob_13_p4, bob_13_p5, bob_14_p6, bob_14_p7, bob_14_p8, bob_15_p9,
        bob_15_p10, bob_16, bob_17, bob_18, bob_19_p11, bob_19_p12, bob_20, bob_21,
        bob_22, bob_23, bob_24, bob_25, bob_26;

        data.forEach(section => {
            if (section.section == '1') {
                titul_section = section.data_report;
            }
    
            if (section.section == '2') {
                bob_1 = section.data_report;
            }
    
            if (section.section == '3') {
                bob_2 = section.data_report;
            }
    
            if (section.section == '4') {
                bob_3 = section.data_report;
            }
    
            if (section.section == '5') {
                bob_4 = section.data_report;
            }
    
            if (section.section == '6') {
                bob_5 = section.data_report;
            }
    
            if (section.section == '7') {
                bob_6 = section.data_report;
            }
    
            if (section.section == '8') {
                bob_7 = section.data_report;
            }
    
            if (section.section == '9') {
                bob_8 = section.data_report;
            }
    
            if (section.section == '10') {
                bob_9 = section.data_report;
            }
    
            if (section.section == '11') {
                bob_10 = section.data_report;
            }
    
            if (section.section == '12') {
                bob_11 = section.data_report;
            }
            if (section.section == '13') {
                bob_12_p1 = section.data_report;
            }
    
            if (section.section == '14') {
                bob_12_p2 = section.data_report;
            }
    
            if (section.section == '15') {
                bob_13_p3 = section.data_report;
            }
    
            if (section.section == '16') {
                bob_13_p4 = section.data_report;
            }
    
            if (section.section == '17') {
                bob_13_p5 = section.data_report;
            }
    
            if (section.section == '18') {
                bob_14_p6 = section.data_report;
            }
    
            if (section.section == '19') {
                bob_14_p7 = section.data_report;
                console.log(section.data_report);
            }
    
            if (section.section == '20') {
                bob_14_p8 = section.data_report;
            }
    
            if (section.section == '21') {
                bob_15_p9 = section.data_report;
            }
    
            if (section.section == '22') {
                bob_15_p10 = section.data_report;
            }
    
            if (section.section == '23') {
                bob_16 = section.data_report;
            }
    
            if (section.section == '24') {
                bob_17 = section.data_report;
            }
    
            if (section.section == '25') {
                bob_18 = section.data_report;
            }
    
            if (section.section == '26') {
                bob_19_p11 = section.data_report;
            }
    
            if (section.section == '27') {
                bob_19_p12 = section.data_report;
            }
    
            if (section.section == '28') {
                bob_20 = section.data_report;
            }
    
            if (section.section == '29') {
                bob_21 = section.data_report;
            }
    
            if (section.section == '30') {
                bob_22 = section.data_report;
            }
    
            if (section.section == '31') {
                bob_23 = section.data_report;
            }
    
            if (section.section == '32') {
                bob_24 = section.data_report;
            }
    
            if (section.section == '33') {
                bob_25 = section.data_report;
            }
    
            if (section.section == '34') {
                bob_26 = section.data_report;
            }
        })

        let prom = 0, selxoz = 0, stroy = 0, uslug = 0;

        let vResult = 0, v225 = 0, v226 = 0, v401 = 0, v406 = 0, v407 = 0, v408 = 0, v409 = 0, v414 = 0, v415 = 0, vServices = 0;

        let skp = "";

        /////////////////////////////////////////////////////////

        if (bob_3 != undefined) {
            bob_3.forEach(e => {

                if (e.row == 225) {
                    v225 = parseFloat(e.g2) || 0;
                }

                if (e.row == 226) {
                    v226 = parseFloat(e.g2) || 0;
                }
            });
        }

        ///////////////////////////////////////////////

        if (bob_12_p1 != undefined) {
            bob_12_p1.forEach(e => {
                if (e.row == 401) {
                    v401 = parseFloat(e.g2) || 0;
                }
            });
        }

        ///////////////////////////////////////////////

        if (bob_13_p3 != undefined) {
            bob_13_p3.forEach(e => {
                if (e.row == 406) {
                    v406 = parseFloat(e.g3) || 0;
                }
            });
        }

        ///////////////////////////////////////////////

        if (bob_13_p4 != undefined) {
            bob_13_p4.forEach(e => {
                if (e.row == 407) {
                    v407 = parseFloat(e.g3) || 0;
                }
            });
        }

        ///////////////////////////////////////////////

        if (bob_13_p5 != undefined) {
            bob_13_p5.forEach(e => {
                if (e.row == 408) {
                    v408 = parseFloat(e.g3) || 0;
                }
            });
        }

        ///////////////////////////////////////////////

        if (bob_14_p6 != undefined) {
            bob_14_p6.forEach(e => {

                if (e.row == 409) {
                    v409 = parseFloat(e.g2) || 0;
                }

                if (e.row == 414) {
                    v414 = parseFloat(e.g2) || 0;
                }
            });
        }

        ///////////////////////////////////////////////

        if (bob_15_p9 != undefined) {
            bob_15_p9.forEach(e => {

                if (e.row == 415) {
                    v415 = parseFloat(e.g3) || 0;
                }

                if (
                    [682011, 682012, 771110, 771211, 771219, 772110, 772210, 772911, 772912, 772913, 772914, 772915, 772916, 772919].some(item => item == e.row) ||
                    e.row.startsWith(773) ||
                    e.row.startsWith(774)
                ) {
                    vServices += parseFloat(e.g3) || 0;
                    vServices = parseFloat(vServices.toFixed(1));
                }

            });
        }
        ///////////////////////////////////////////////

        prom = parseFloat(prom) || 0
        selxoz = parseFloat(selxoz) || 0
        stroy = parseFloat(stroy) || 0
        uslug = parseFloat(uslug) || 0
        v225 = parseFloat(v225) || 0
        v226 = parseFloat(v226) || 0
        v401 = parseFloat(v401) || 0
        v406 = parseFloat(v406) || 0
        v407 = parseFloat(v407) || 0
        v408 = parseFloat(v408) || 0
        v409 = parseFloat(v409) || 0
        v414 = parseFloat(v414) || 0
        v415 = parseFloat(v415) || 0
        /////////////////////////////////////////////////////////
        console.log(
            prom,
            selxoz,
            stroy ,
            uslug ,
            v225,
            v226,
            v401,
            v406,
            v407,
            v408,
            v409,
            v414,
            v415 ,
        )

        if ((v401 + v406 + v407 + v408 + v409 + v414 + v415) > 0) {

            if (vServices == (v225 + v226)) {
                vResult = v401 + v406 + v407 + v408 + v409 + v414 + (v415 - vServices);
            } else {
                vResult = v401 + v406 + v407 + v408 + v409 + v414 + v415;
            }
        }
        vResult = parseFloat(vResult.toFixed(1));

        /////////////////////////////////////////////////////////

        if (vResult != 0) {

            prom = v401 / vResult * 100;
            prom = parseFloat(prom.toFixed(1))

            selxoz = (v406 + v407 + v408) / vResult * 100;
            selxoz = parseFloat(selxoz.toFixed(1))

            stroy = (v409 + v414) / vResult * 100;
            stroy = parseFloat(stroy.toFixed(1))

            if (vServices == (v225 + v226)) {
                uslug = (v415 - vServices) / vResult * 100;
            } else {
                uslug = v415 / vResult * 100;
            }
            uslug = parseFloat(uslug.toFixed(1));
        }

        /////////////////////////////////////////////////////////

        if (prom > selxoz && prom > stroy && prom > uslug) {
            if (bob_12_p2 != undefined) {
                let max = { code: '', value: 0 };
                for (let i = 0; i < bob_12_p2.length; i++) {
                    if (bob_12_p2[i].g3 != "002100") {
                        let code = bob_12_p2[i].g3.slice(0, 2);
                        let qiymat = 0;
                        for (let j = 0; j < bob_12_p2.length; j++) {
                            if (bob_12_p2[j].g3.startsWith(code)) {
                                qiymat = qiymat + (parseFloat(bob_12_p2[j].g9) || 0)
                            }
                        }
                        if (max.value < qiymat) {
                            max.value = qiymat;
                            max.code = code;
                        }
                    }
                }
                let max1 = { code: "", value: 0 };
                for (let i = 0; i < bob_12_p2.length; i++) {
                    if (bob_12_p2[i].g3.startsWith(max.code) && bob_12_p2[i].g3 != "002100") {
                        let qiymat = (parseFloat(bob_12_p2[i].g9) || 0);
                        if (qiymat > max1.value) {
                            max1.value = qiymat;
                            max1.code = bob_12_p2[i].g3;
                        }
                    }
                }

                skp = max1.code;
            }
        } else if (selxoz > prom && selxoz > stroy && selxoz > uslug) {

            let v01 = 0, v02 = 0, v03 = 0;

            if (bob_13_p3 != undefined) {
                bob_13_p3.forEach(e => {
                    if (e.row == 406) {
                        v01 = parseFloat(e.g3) || 0;
                    }
                });
            }

            if (bob_13_p4 != undefined) {
                bob_13_p4.forEach(e => {
                    if (e.row == 407) {
                        v02 = parseFloat(e.g3) || 0;
                    }
                });
            }

            if (bob_13_p5 != undefined) {
                bob_13_p5.forEach(e => {
                    if (e.row == 408) {
                        v03 = parseFloat(e.g3) || 0;
                    }
                });
            }

            ///////////////////////////////////////////////

            if (v01 > v02 && v01 > v03) {
                if (bob_13_p3 != undefined) {
                    let max1 = { code: "", value: 0 };
                    for (let i = 0; i < bob_13_p3.length; i++) {
                        if (bob_13_p3[i].g2 != 406) {
                            let qiymat = (parseFloat(bob_13_p3[i].g3) || 0);
                            if (qiymat > max1.value) {
                                max1.value = qiymat;
                                max1.code = bob_13_p3[i].g2;
                            }
                        }

                    }
                    skp = max1.code;
                }
            } else if (v02 > v01 && v02 > v03) {
                if (bob_13_p4 != undefined) {
                    let max1 = { code: "", value: 0 };
                    for (let i = 0; i < bob_13_p4.length; i++) {
                        if (bob_13_p4[i].g2 != 407) {
                            let qiymat = (parseFloat(bob_13_p4[i].g3) || 0);
                            if (qiymat > max1.value) {
                                max1.value = qiymat;
                                max1.code = bob_13_p4[i].g2;
                            }
                        }
                    }
                    skp = max1.code;
                }
            } else {
                if (bob_13_p5 != undefined) {
                    let max1 = { code: "", value: 0 };
                    for (let i = 0; i < bob_13_p5.length; i++) {
                        if (bob_13_p5[i].g2 != 408) {
                            let qiymat = (parseFloat(bob_13_p5[i].g3) || 0);
                            if (qiymat > max1.value) {
                                max1.value = qiymat;
                                max1.code = bob_13_p5[i].g2;
                            }
                        }
                    }
                    skp = max1.code;
                }
            }

        } else if (stroy > prom && stroy > selxoz && stroy > uslug) {
            
            if (v409 < v414) {
                skp = 421;
                
            } else {
                
                if (bob_14_p7 != undefined) {

                    console.log("stroy");
                    let max = { code: '', value: 0 };
                    let max1 = { code: "", value: 0 };
                    
                    for (let i = 0; i < bob_14_p7.length; i++) {
                        let code = bob_14_p7[i].g2.slice(0, 2);
                        let qiymat = 0;
                        for (let j = 0; j < bob_14_p7.length; j++) {
                            if (bob_14_p7[j].g2.startsWith(code)) {
                                qiymat = qiymat + (parseFloat(bob_14_p7[j].g3) || 0)
                            }
                        }
                        if (max.value < qiymat) {
                            max.value = qiymat;
                            max.code = code;
                        }
                    }

                    for (let i = 0; i < bob_14_p7.length; i++) {
                        if (bob_14_p7[i].g2.startsWith(max.code)) {
                            let qiymat = (parseFloat(bob_14_p7[i].g3) || 0);
                            if (qiymat > max1.value) {
                                max1.value = qiymat;
                                max1.code = bob_14_p7[i].g2;
                            }
                        }
                    }

                    console.log('max', max);
                    console.log('max1', max1);

                    skp = max1.code;
                }
            }
        } else {
            if (bob_15_p9 != undefined) {

                let v1 = 0;
                let v2 = 0;
                let v3 = 0;

                let max = { code: '', value: 0 };

                for (let i = 0; i < bob_15_p9.length; i++) {
                    if (bob_15_p9[i].g2 != 415) {
                        if (
                            bob_15_p9[i].g2 == 451111 ||
                            bob_15_p9[i].g2 == 451112 ||
                            bob_15_p9[i].g2 == 451141 ||
                            bob_15_p9[i].g2 == 451149 ||
                            bob_15_p9[i].g2 == 451911 ||
                            bob_15_p9[i].g2 == 451912 ||
                            bob_15_p9[i].g2 == 451941 ||
                            bob_15_p9[i].g2 == 451949 ||
                            bob_15_p9[i].g2 == 453111 ||
                            bob_15_p9[i].g2 == 453112 ||
                            bob_15_p9[i].g2 == 453120 ||
                            bob_15_p9[i].g2 == 454010 ||
                            bob_15_p9[i].g2 == 454040 ||
                            bob_15_p9[i].g2.slice(0, 2) == "46"
                        ) {
                            v1 = v1 + (parseFloat(bob_15_p9[i].g3) || 0);
                        } else if (
                            bob_15_p9[i].g2 == 451121 ||
                            bob_15_p9[i].g2 == 451122 ||
                            bob_15_p9[i].g2 == 451123 ||
                            bob_15_p9[i].g2 == 451124 ||
                            bob_15_p9[i].g2 == 451131 ||
                            bob_15_p9[i].g2 == 451139 ||
                            bob_15_p9[i].g2 == 451921 ||
                            bob_15_p9[i].g2 == 451922 ||
                            bob_15_p9[i].g2 == 451931 ||
                            bob_15_p9[i].g2 == 451939 ||
                            bob_15_p9[i].g2 == 453211 ||
                            bob_15_p9[i].g2 == 453212 ||
                            bob_15_p9[i].g2 == 453221 ||
                            bob_15_p9[i].g2 == 453222 ||
                            bob_15_p9[i].g2 == 453229 ||
                            bob_15_p9[i].g2 == 454020 ||
                            bob_15_p9[i].g2 == 454030 ||
                            bob_15_p9[i].g2.slice(0, 2) == 47
                        ) {
                            v2 = v2 + (parseFloat(bob_15_p9[i].g3) || 0);
                        } else if (
                            bob_15_p9[i].g2 == 452011 ||
                            bob_15_p9[i].g2 == 452012 ||
                            bob_15_p9[i].g2 == 452013 ||
                            bob_15_p9[i].g2 == 452014 ||
                            bob_15_p9[i].g2 == 452021 ||
                            bob_15_p9[i].g2 == 452022 ||
                            bob_15_p9[i].g2 == 452023 ||
                            bob_15_p9[i].g2 == 452030 ||
                            bob_15_p9[i].g2 == 454050
                        ) {
                            v3 = v3 + (parseFloat(bob_15_p9[i].g3) || 0);
                        } else {

                            let code = bob_15_p9[i].g2.slice(0, 2);
                            let qiymat = 0;
                            let v225 = 0, v226 = 0, vServices = 0;
                            if (bob_3 != undefined) {
                                bob_3.forEach(e => {

                                    if (e.row == 225) {
                                        v225 = parseFloat(e.g2) || 0;
                                    }

                                    if (e.row == 226) {
                                        v226 = parseFloat(e.g2) || 0;
                                    }
                                });
                            }

                            if (bob_15_p9 != undefined) {
                                bob_15_p9.forEach(e => {

                                    if (e.row == 415) {
                                        v415 = parseFloat(e.g3) || 0;
                                    }

                                    if (
                                        [682011, 682012, 771110, 771211, 771219, 772110, 772210, 772911, 772912, 772913, 772914, 772915, 772916, 772919].some(item => item == e.row) ||
                                        e.row.startsWith(773) || e.row.startsWith(774)
                                    ) {
                                        vServices += parseFloat(e.g3) || 0;
                                        vServices = parseFloat(vServices.toFixed(1));
                                    }

                                });
                            }

                            let ttt = false;
                            if (vServices == (v225 + v226)) {
                                ttt = true;
                            }

                            for (let j = 0; j < bob_15_p9.length; j++) {
                                if (bob_15_p9[j].g2.startsWith(code) && bob_15_p9[j].g2.length == 6) {

                                    if (ttt) {
                                        if (bob_15_p9[j].g2 != 682011 &&
                                            bob_15_p9[j].g2 != 682012 &&
                                            bob_15_p9[j].g2 != 771110 &&
                                            bob_15_p9[j].g2 != 771211 &&
                                            bob_15_p9[j].g2 != 771219 &&
                                            bob_15_p9[j].g2 != 772110 &&
                                            bob_15_p9[j].g2 != 772210 &&
                                            bob_15_p9[j].g2 != 772911 &&
                                            bob_15_p9[j].g2 != 772912 &&
                                            bob_15_p9[j].g2 != 772913 &&
                                            bob_15_p9[j].g2 != 772914 &&
                                            bob_15_p9[j].g2 != 772915 &&
                                            bob_15_p9[j].g2 != 772916 &&
                                            bob_15_p9[j].g2 != 772919 &&
                                            !bob_15_p9[j].g2.startsWith(773) &&
                                            !bob_15_p9[j].g2.startsWith(774)
                                        ) {
                                            qiymat = qiymat + (parseFloat(bob_15_p9[j].g3) || 0)
                                        }
                                    } else {
                                        qiymat = qiymat + (parseFloat(bob_15_p9[j].g3) || 0)
                                    }
                                }
                            }
                            if (max.value < qiymat) {
                                max.value = qiymat;
                                max.code = code;
                            }
                        }
                    }
                }

                if (v1 > v2 && v1 > v3 && v1 > max.value) {
                    let max_v1 = { code: '', value: 0 };
                    for (let k = 0; k < bob_15_p9.length; k++) {
                        if (
                            bob_15_p9[k].g2 == 451111 ||
                            bob_15_p9[k].g2 == 451112 ||
                            bob_15_p9[k].g2 == 451141 ||
                            bob_15_p9[k].g2 == 451149 ||
                            bob_15_p9[k].g2 == 451911 ||
                            bob_15_p9[k].g2 == 451912 ||
                            bob_15_p9[k].g2 == 451941 ||
                            bob_15_p9[k].g2 == 451949 ||
                            bob_15_p9[k].g2 == 453111 ||
                            bob_15_p9[k].g2 == 453112 ||
                            bob_15_p9[k].g2 == 453120 ||
                            bob_15_p9[k].g2 == 454010 ||
                            bob_15_p9[k].g2 == 454040 ||
                            bob_15_p9[k].g2.slice(0, 2) == "46"
                        ) {
                            let qiymat1 = (parseFloat(bob_15_p9[k].g3) || 0);
                            if (max_v1.value < qiymat1) {
                                max_v1.value = qiymat1;
                                max_v1.code = bob_15_p9[k].g2;
                            };
                        }
                    }
                    skp = max_v1.code;


                } else if (v2 > v1 && v2 > v3 && v2 > max.value) {
                    let max_v2 = { code: '', value: 0 };
                    for (let k = 0; k < bob_15_p9.length; k++) {
                        if (
                            bob_15_p9[k].g2 == 451121 ||
                            bob_15_p9[k].g2 == 451122 ||
                            bob_15_p9[k].g2 == 451123 ||
                            bob_15_p9[k].g2 == 451124 ||
                            bob_15_p9[k].g2 == 451131 ||
                            bob_15_p9[k].g2 == 451139 ||
                            bob_15_p9[k].g2 == 451921 ||
                            bob_15_p9[k].g2 == 451922 ||
                            bob_15_p9[k].g2 == 451931 ||
                            bob_15_p9[k].g2 == 451939 ||
                            bob_15_p9[k].g2 == 453211 ||
                            bob_15_p9[k].g2 == 453212 ||
                            bob_15_p9[k].g2 == 453221 ||
                            bob_15_p9[k].g2 == 453222 ||
                            bob_15_p9[k].g2 == 453229 ||
                            bob_15_p9[k].g2 == 454020 ||
                            bob_15_p9[k].g2 == 454030 ||
                            bob_15_p9[k].g2.slice(0, 2) == "47"
                        ) {
                            let qiymat1 = (parseFloat(bob_15_p9[k].g3) || 0);
                            if (max_v2.value < qiymat1) {
                                max_v2.value = qiymat1;
                                max_v2.code = bob_15_p9[k].g2;
                            }
                        }
                    }
                    skp = max_v2.code;

                } else if (v3 > v1 && v3 > v3 && v3 > max.value) {
                    let max_v3 = { code: '', value: 0 };
                    for (let k = 0; k < bob_15_p9.length; k++) {
                        if (
                            bob_15_p9[k].g2 == 452011 ||
                            bob_15_p9[k].g2 == 452012 ||
                            bob_15_p9[k].g2 == 452013 ||
                            bob_15_p9[k].g2 == 452014 ||
                            bob_15_p9[k].g2 == 452021 ||
                            bob_15_p9[k].g2 == 452022 ||
                            bob_15_p9[k].g2 == 452023 ||
                            bob_15_p9[k].g2 == 452030 ||
                            bob_15_p9[k].g2 == 454050
                        ) {
                            let qiymat1 = (parseFloat(bob_15_p9[k].g3) || 0);
                            if (max_v3.value < qiymat1) {
                                max_v3.value = qiymat1;
                                max_v3.code = bob_15_p9[k].g2;
                            }
                        }
                    }
                    skp = max_v3.code;

                } else {

                    let max1 = { code: "", value: 0 };
                    let max2 = { code: "", value: 0 };

                    for (let k = 0; k < bob_15_p9.length; k++) {
                        if (bob_15_p9[k].g2.startsWith(max.code) && bob_15_p9[k].g2.length == 6) {
                            let qiymat = (parseFloat(bob_15_p9[k].g3) || 0);
                            if (qiymat > max1.value) {
                                max1.value = qiymat;
                                max1.code = bob_15_p9[k].g2;
                            }
                        }
                    }
                    // skp = max1.code;

                    if (
                        max1.code == "771110" ||
                        max1.code == "522920" ||
                        max1.code == "682012"
                    ) {
                        for (let k = 0; k < bob_15_p9.length; k++) {
                            if (bob_15_p9[k].g2.startsWith(max1.code)) {
                                let qiymat = (parseFloat(bob_15_p9[k].g3) || 0);
                                if (bob_15_p9[k].g2 != "771110" && bob_15_p9[k].g2 != "522920" && bob_15_p9[k].g2 != "682012")
                                    if (qiymat > max2.value) {
                                        max2.value = qiymat;
                                        max2.code = bob_15_p9[k].g2;
                                    }
                            }
                        }
                        skp = max2.code;
                    } else {
                        skp = max1.code;
                    }
                }
            }
        }

        console.log('skp', skp);

        return { skp, vResult };
}

const whoIsWho = (ogr, data) => {

    let titul_section, bob_1, bob_2, bob_3, bob_4, bob_5, bob_6, bob_7, bob_8, bob_9, bob_10, bob_11,
        bob_12_p1, bob_12_p2, bob_13_p3, bob_13_p4, bob_13_p5, bob_14_p6, bob_14_p7, bob_14_p8, bob_15_p9,
        bob_15_p10, bob_16, bob_17, bob_18, bob_19_p11, bob_19_p12, bob_20, bob_21,
        bob_22, bob_23, bob_24, bob_25, bob_26;

        data.forEach(section => {
            if (section.section == '1') {
                titul_section = section.data_report;
            }
    
            if (section.section == '2') {
                bob_1 = section.data_report;
            }
    
            if (section.section == '3') {
                bob_2 = section.data_report;
            }
    
            if (section.section == '4') {
                bob_3 = section.data_report;
            }
    
            if (section.section == '5') {
                bob_4 = section.data_report;
            }
    
            if (section.section == '6') {
                bob_5 = section.data_report;
            }
    
            if (section.section == '7') {
                bob_6 = section.data_report;
            }
    
            if (section.section == '8') {
                bob_7 = section.data_report;
            }
    
            if (section.section == '9') {
                bob_8 = section.data_report;
            }
    
            if (section.section == '10') {
                bob_9 = section.data_report;
            }
    
            if (section.section == '11') {
                bob_10 = section.data_report;
            }
    
            if (section.section == '12') {
                bob_11 = section.data_report;
            }
            if (section.section == '13') {
                bob_12_p1 = section.data_report;
            }
    
            if (section.section == '14') {
                bob_12_p2 = section.data_report;
            }
    
            if (section.section == '15') {
                bob_13_p3 = section.data_report;
            }
    
            if (section.section == '16') {
                bob_13_p4 = section.data_report;
            }
    
            if (section.section == '17') {
                bob_13_p5 = section.data_report;
            }
    
            if (section.section == '18') {
                bob_14_p6 = section.data_report;
            }
    
            if (section.section == '19') {
                bob_14_p7 = section.data_report;
            }
    
            if (section.section == '20') {
                bob_14_p8 = section.data_report;
            }
    
            if (section.section == '21') {
                bob_15_p9 = section.data_report;
            }
    
            if (section.section == '22') {
                bob_15_p10 = section.data_report;
            }
    
            if (section.section == '23') {
                bob_16 = section.data_report;
            }
    
            if (section.section == '24') {
                bob_17 = section.data_report;
            }
    
            if (section.section == '25') {
                bob_18 = section.data_report;
            }
    
            if (section.section == '26') {
                bob_19_p11 = section.data_report;
            }
    
            if (section.section == '27') {
                bob_19_p12 = section.data_report;
            }
    
            if (section.section == '28') {
                bob_20 = section.data_report;
            }
    
            if (section.section == '29') {
                bob_21 = section.data_report;
            }
    
            if (section.section == '30') {
                bob_22 = section.data_report;
            }
    
            if (section.section == '31') {
                bob_23 = section.data_report;
            }
    
            if (section.section == '32') {
                bob_24 = section.data_report;
            }
    
            if (section.section == '33') {
                bob_25 = section.data_report;
            }
    
            if (section.section == '34') {
                bob_26 = section.data_report;
            }
        })

    let ogr30 = 0, ogr50 = 0, mansub = true, countEmployees = 0, i = 0;

    let v102 = 0, v146 = 0, v150 = 0, vResult = 0;

    let v225 = 0, v226 = 0, v401 = 0, v406 = 0, v407 = 0, v408 = 0, v409 = 0, v414 = 0, v415 = 0, vServices = 0;

    if (bob_1 != undefined) {
        bob_1.forEach(e => {

            if (e.row == 102) {
                v102 = parseFloat(e.g2) || 0;
            }

            if (e.row == 146) {
                v146 = parseFloat(e.g2) || 0;
            }

            if (e.row == 150) {
                v150 = parseFloat(e.g2) || 0;
            }
        });
    }

    if (bob_3 != undefined) {
        bob_3.forEach(e => {

            if (e.row == 225) {
                v225 = parseFloat(e.g2) || 0;
            }

            if (e.row == 226) {
                v226 = parseFloat(e.g2) || 0;
            }
        });
    }

    if (bob_12_p1 != undefined) {
        bob_12_p1.forEach(e => {
            if (e.row == 401) {
                v401 = parseFloat(e.g2) || 0;
            }
        });
    }

    if (bob_13_p3 != undefined) {
        bob_13_p3.forEach(e => {
            if (e.row == 406) {
                v406 = parseFloat(e.g3) || 0;
            }
        });
    }

    if (bob_13_p4 != undefined) {
        bob_13_p4.forEach(e => {
            if (e.row == 407) {
                v407 = parseFloat(e.g3) || 0;
            }
        });
    }

    if (bob_13_p5 != undefined) {
        bob_13_p5.forEach(e => {
            if (e.row == 408) {
                v408 = parseFloat(e.g3) || 0;
            }
        });
    }

    if (bob_14_p6 != undefined) {
        bob_14_p6.forEach(e => {

            if (e.row == 409) {
                v409 = parseFloat(e.g2) || 0;
            }

            if (e.row == 414) {
                v414 = parseFloat(e.g2) || 0;
            }
        });
    }

    if (bob_15_p9 != undefined) {
        bob_15_p9.forEach(e => {

            if (e.row == 415) {
                v415 = parseFloat(e.g3) || 0;
            }

            if (
                [682011, 682012, 771110, 771211, 771219, 772110, 772210, 772911, 772912, 772913, 772914, 772915, 772916, 772919].some(item => item == e.row) ||
                e.row.startsWith(773) || e.row.startsWith(774)
            ) {
                vServices += parseFloat(e.g3) || 0;
                vServices = parseFloat(vServices.toFixed(1));
            }

        });
    }

    if (vServices == (v225 + v226)) {
        vResult = v401 + v406 + v407 + v408 + v409 + v414 + (v415 - vServices);
    } else {
        vResult = v401 + v406 + v407 + v408 + v409 + v414 + v415
    }

    vResult = parseFloat(vResult.toFixed(1));

    // if(vResult > 0){
    //     // yangi OKED bo'yicha ogranicheniya
    //     ogr = 50;
    // }else{
    //     // joriy OKED bo'yicha ogranicheniya
    //     ogr = 100;
    // }

    ogr30 = ogr * 30 / 100;
    ogr30 = parseFloat(ogr30.toFixed(1));

    ogr50 = ogr * 50 / 100;
    ogr50 = parseFloat(ogr50.toFixed(1));

    if (v102 + v146 == 0 && v150 > ogr) {
        mansub = false;
        countEmployees = v150;
        i = 1
    } else if (v102 + v146 == 0 && v150 <= ogr) {
        mansub = true;
        countEmployees = v150;
        i = 2
    } else if ((v102 > 0 && v146 == 0) && (v102 <= ogr30) && (v150 - v102 > ogr)) {
        mansub = false;
        countEmployees = v150 - v102;
        i = 3
    } else if ((v102 > 0 && v146 == 0) && (v102 <= ogr30) && (v150 - v102 <= ogr)) {
        mansub = true;
        countEmployees = v150 - v102;
        i = 4
    } else if ((v102 > 0 && v146 == 0) && (v102 > ogr30) && (v150 - ogr30 > ogr)) {
        mansub = false;
        countEmployees = v150 - ogr30;
        i = 5
    } else if ((v102 > 0 && v146 == 0) && (v102 > ogr30) && (v150 - ogr30 <= ogr)) {
        mansub = true;
        countEmployees = v150 - ogr30;
        i = 6
    } else if ((v102 == 0 && v146 > 0) && (v146 <= ogr50) && (v150 - v146 > ogr)) {
        mansub = false;
        countEmployees = v150 - v146;
        i = 7
    } else if ((v102 == 0 && v146 > 0) && (v146 <= ogr50) && (v150 - v146 <= ogr)) {
        mansub = true;
        countEmployees = v150 - v146;
        i = 8
    } else if ((v102 == 0 && v146 > 0) && (v146 > ogr50) && (v150 - ogr50 > ogr)) {
        mansub = false;
        countEmployees = v150 - ogr50;
        i = 9
    } else if ((v102 == 0 && v146 > 0) && (v146 > ogr50) && (v150 - ogr50 <= ogr)) {
        mansub = true;
        countEmployees = v150 - ogr50;
        i = 10
    } else if ((v102 > 0 && v146 > 0) && (v102 <= ogr30 && v146 <= ogr50) && (v150 - v102 - v146 > ogr)) {
        mansub = false;
        countEmployees = v150 - v102 - v146;
        i = 11
    } else if ((v102 > 0 && v146 > 0) && (v102 <= ogr30 && v146 <= ogr50) && (v150 - v102 - v146 <= ogr)) {
        mansub = true;
        countEmployees = v150 - v102 - v146;
        i = 12
    } else if ((v102 > 0 && v146 > 0) && (v102 <= ogr30 && v146 > ogr50) && (v150 - v102 - ogr50 > ogr)) {
        mansub = false;
        countEmployees = v150 - v102 - ogr50;
        i = 13
    } else if ((v102 > 0 && v146 > 0) && (v102 <= ogr30 && v146 > ogr50) && (v150 - v102 - ogr50 <= ogr)) {
        mansub = true;
        countEmployees = v150 - v102 - ogr50;
        i = 14
    } else if ((v102 > 0 && v146 > 0) && (v102 > ogr30 && v146 <= ogr50) && (v150 - v146 - ogr30 > ogr)) {
        mansub = false;
        countEmployees = v150 - v146 - ogr30;
        i = 15
    } else if ((v102 > 0 && v146 > 0) && (v102 > ogr30 && v146 <= ogr50) && (v150 - v146 - ogr30 <= ogr)) {
        mansub = true;
        countEmployees = v150 - v146 - ogr30;
        i = 16
    } else if ((v102 > 0 && v146 > 0) && (v102 > ogr30 && v146 > ogr50) && (v150 - ogr30 - ogr50 > ogr)) {
        mansub = false;
        countEmployees = v150 - ogr30 - ogr50;
        i = 17
    } else if ((v102 > 0 && v146 > 0) && (v102 > ogr30 && v146 > ogr50) && (v150 - ogr30 - ogr50 <= ogr)) {
        mansub = false;
        countEmployees = v150 - ogr30 - ogr50;
        i = 18
    }

    if (mansub) {
        return { errMsgUz: `IFUT kodingiz va xodimlarning yillik oʻrtacha soni boʻyicha Sizning korxonangiz kichik tadbirkorlik subyektiga mansub`, errMsgRu: `По среднегодовой численности и коду ОКЭД Ваше предприятие относится к субъектам малого предпринимательства.`, countXodim: countEmployees, homeEmployees: v102, graduates: v146, avarageCountEmployeesPerYear: v150 }
    } else {
        return { errMsgUz: `IFUT kodingiz va xodimlarning yillik oʻrtacha soni boʻyicha Sizning korxonangiz kichik tadbirkorlik subyektiga mansub emas`, errMsgRu: `По среднегодовой численности и коду ОКЭД Ваше предприятие не относится к субъектам малого предпринимательства.`, countXodim: countEmployees, homeEmployees: v102, graduates: v146, avarageCountEmployeesPerYear: v150 }
    }
}

const finallycounter = async (link, oked, attempts, inn, oldOked, okpo) => {

    try {

        const oldResult = await OkedInformation.findOne({ inn: inn })
        if (oldResult == null || oldResult.attempts < attempts) {
            console.log("---calculate---")
            const result = await axios.get(`http://172.16.11.14:9080/v1/skp_report/?root=${link}`);

            let bob_1 = null
            let bob_3 = null
            let bob_12_p1 = null
            let bob_13_p3 = null
            let bob_13_p4 = null
            let bob_13_p5 = null
            let bob_14_p6 = null
            let bob_15_p9 = null
            let bob_12_p2 = null
            let bob_14_p7 = null

            result.data.results.forEach(element => {
                if (element.section == 2) {
                    bob_1 = element.data_report
                }
                if (element.section == 4) {
                    bob_3 = element.data_report
                }
                if (element.section == 13) {
                    bob_12_p1 = element.data_report
                }
                if (element.section == 14) {
                    bob_12_p2 = element.data_report
                }
                if (element.section == 15) {
                    bob_13_p3 = element.data_report
                }
                if (element.section == 16) {
                    bob_13_p4 = element.data_report
                }
                if (element.section == 17) {
                    bob_13_p5 = element.data_report
                }
                if (element.section == 18) {
                    bob_14_p6 = element.data_report
                }
                if (element.section == 18) {
                    bob_14_p6 = element.data_report
                }
                if (element.section == 19) {
                    bob_14_p7 = element.data_report
                }
                if (element.section == 21) {
                    bob_15_p9 = element.data_report
                }
                
            });

            const resultoked = getSKP(bob_3, bob_12_p1, bob_12_p2, bob_13_p3, bob_13_p4, bob_13_p5, bob_14_p6, bob_15_p9, bob_14_p7)

            let data = {}

            if (resultoked.skp != "") {
                data.skp = resultoked.skp
                data.oked = ''
            } else {
                data.skp = ''
                data.oked = oked
            }

            const mainresult = await axios.get(`http://172.16.11.14:9080/v1/reports/skp/?oked=${data.oked}&skp=${data.skp}`)
            let whiiswho = whoIsWho(mainresult.data[0].limitition, bob_1, bob_3, bob_12_p1, bob_13_p3, bob_13_p4, bob_13_p5, bob_14_p6, bob_15_p9, bob_14_p7)
            whiiswho.attempts = attempts
            whiiswho.inn = inn
            whiiswho.oldOked = oldOked
            whiiswho.okpo = okpo
            whiiswho.newOked = mainresult.data[0].oked
            let okedInformation = new OkedInformation(whiiswho)

            const okedInformation1 = await okedInformation.save()
            return okedInformation1
        }

    } catch (err) {
        console.log(err.message, "---------------------")
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports.getSKP = getSKP
module.exports.whoIsWho = whoIsWho
module.exports.finallycounter = finallycounter
module.exports.delay = delay