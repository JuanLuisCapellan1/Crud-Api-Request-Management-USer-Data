const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    gender: String,
    //password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    status: String
})

const Userdb = mongoose.model('userdb',schema);

module.exports = Userdb;
