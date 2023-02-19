const mongoose = require('mongoose')

const OkedInformationSchema = new mongoose.Schema({
    inn: {
        type: String,
        required: true,
    },
    oldOked: {
        type: String,
        required: true,
    },
    newOked: {
        type: String,
        required: true,
    },
    okpo: {
        type: String,
        required: true,
    },
    errMsgUz: {
        type: String,
        required: true
    },
    errMsgRu: {
        type: String,
        required: true
    },
    countXodim: {
        type: Number,
        required: true
    },
    homeEmployees: {
        type: Number,
        required: true
    },
    graduates: {
        type: Number,
        required: true
    },
    avarageCountEmployeesPerYear: {
        type: Number,
        required: true
    },
    attempts: {
        type: Number,
        required: true
    }
});

const OkedInformation = mongoose.model("informations", OkedInformationSchema);
module.exports.OkedInformation = OkedInformation;