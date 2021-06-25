
// import mongoose
const mongoose = require("mongoose");

// link storage obj
let linkStore = {};

// linkStore Schema
const linkSchema = mongoose.Schema({
    linkName: String, // URL name
    description: String,
    instructions: String,
    link: String,
    linkType: String,
    createDate: Date,
    updated: Date,
    deadline: Date, // obsolete as well
    deadlinePast: Boolean // is it done?
})



// create a table or collection
// creating a 'model'
const Link = mongoose.model("Links", linkSchema);


module.exports = {
    linkStore,
    Link
}