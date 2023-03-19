// Load mongoose
const mongoose = require('mongoose')

// Pointing to the schema property (shortcut) (Schema is a class)
const Schema = mongoose.Schema

// Instantiate a new Schema object for log and structure our data
const logSchema = new Schema({
    title: { 
        // expecting the "title" property to be a string
        type: String,
        // validation to make sure the data is legit 
        required: true
    },
    entry: { type: String, required: true},
    shipIsBroken: { type: Boolean, default: true, required: true}
}, { timestamps: true })

// create our model using our logSchema and give our collection a name of "logs"
const Log = mongoose.model('log', logSchema)

// exporting the log model as a module
module.exports = Log