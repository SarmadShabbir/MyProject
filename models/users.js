const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    Pwd: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Users = mongoose.model("Users", userSchema)

module.exports = Users;