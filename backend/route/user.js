const express = require('express');

const router = express.Router();


router.post("/", require("../controllers/user").createuser);
router.get("/", require("../controllers/user").getuser);


module.exports = router;