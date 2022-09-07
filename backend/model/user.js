const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    Name: String,
    Type: String,
    Price: Number,
    Address: String
})

module.exports = mongoose.model("property", userschema);