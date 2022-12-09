const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
require("dotenv").config();

const app=express();
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST"],
    credentials: true,
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(require("./routes.js"))

app.listen(1008, (err) => {
    if(!err){
        console.log("Server ported at 1008 ...");
    }
});