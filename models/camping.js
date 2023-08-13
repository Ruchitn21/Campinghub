// Defining the model and Schema for our Mongodb database

const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CampingSchema = new Schema({
    title : String,
    price : String,
    description : String,
    location : String
});

module.exports = mongoose.model("Schema",CampingSchema);