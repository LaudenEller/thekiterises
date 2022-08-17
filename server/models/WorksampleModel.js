// import Mongoose
const mongoose = require('mongoose')

// Schema is like a class in Python, it is a blueprint for instances
const Schema = mongoose.Schema

// define a new model for the worksample resource
const worksampleSchema = new Schema({
    clientName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    // add date and time data to each instance of this model
    }, {timestamps: true }
    )
    
    // export worksample model
    module.exports = mongoose.model('Worksample', worksampleSchema)