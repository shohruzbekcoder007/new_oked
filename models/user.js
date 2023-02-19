const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    user_name: {
        type: String,
        unique: false,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        unique: false,
        required: true
    }
});

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, status: this.status, name: this.name, group: this.group }, "q1y1npar0l",
    // {expiresIn: '300s'}
    );
    return token;
  }

const User = mongoose.model("users", UserSchema);
module.exports.User = User;