const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/realEstate");


module.exports = mongoose;