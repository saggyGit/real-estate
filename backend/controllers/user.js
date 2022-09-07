const model = require("../model/user");


exports.createuser = async(req, res) => {
    try {
        const newuser = await new model(req.body).save();
        res.json(newuser);
    } catch (err) {
        res.json(err);
    }

}
exports.getuser = async(req, res) => {
    try {
        const getall = await model.find();
        res.json(getall);
    } catch (err) {
        res.json(err);
    }

}