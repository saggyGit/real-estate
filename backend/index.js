const express = require("express");
const con = require("./db");
const cors = require("cors");



const app = express();


con.connection.on("connected", (err) => {
    if (err) {

        console.log("not connected");
    } else {
        console.log("connected to md");
    }

})

app.use(cors());
app.use(express.json());
app.use("/realEstate", require("./route/user"));





app.listen(4000, () => {

    console.log("server is started");
});