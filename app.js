const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

app = express();
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    res.render("home")
})
app.listen(3000,()=>{
    console.log("Server at Running at Port 3000");
})