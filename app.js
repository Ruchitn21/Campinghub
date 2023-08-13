const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Camping = require("./models/camping");

// connecting to our mongodb server
mongoose.connect("mongodb://127.0.0.1:27017/Campinghub")
                .then(()=>{
                    console.log("Connection to Mongodb successfull")
                })
                .catch(err=>{
                    console.log("Oops! An Error occured while connection to Mongodb")
                    console.log(err)
                });

app = express();
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/makecamp",async (req,res)=>{
    const model = new Camping({
        title : "Ruchit's House",
        price : "Rs. 1000",
        description : "Nice Lake View Camp",
        location : "California"

    });

    await model.save()
    res.send(model)
})
app.listen(3000,()=>{
    console.log("Server at Running at Port 3000");
})