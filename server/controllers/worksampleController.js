// import worksample model
const Worksample = require('../models/WorksampleModel')

// import Mongoose
const mongoose = require('mongoose')

// get all worksamples
const getWorksamples = async (req, res) => {
    
    const worksamples = await Worksample.find({}).sort({createdAt: -1})
    
    res.status(200).json(worksamples)
}

// get a single worksample
const getWorksample = async (req, res) => {
    const {id} = req.params

    // handle if targeted resource id isn't correct
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such worksample'})
    }
    
    // handle getting targeted resource
    const worksample = await Worksample.findById(id)
    

    // handle if targeted resource doesn't exist
    if(!worksample) {
        return res.status(404).json({error: 'No such worksample'})
    }
    
    // return targeted resource to client
    res.status(200).json(worksample)
}

// create new worksample
const createWorksample = async (req, res) => {
    
    // copy new object data from client request
    const {clientName, image, description} = req.body
    
    // handle adding doc to db (BSON uses docs, not objects)
    try {
        const worksample = await Worksample.create({clientName, image, description})
        
        // return copy of what was sent to mongoDB (HELP: or is it a copy of what was saved like in Django?)
        res.status(200).json(worksample)
    
        // handle if there is an error
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a worksample
const deleteWorksample = async (req, res) => {

    // get the doc id from the request parameters
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such worksample'})
    }
    
    // the _ denotes data that belongs to the doc in the DB that is being matched up with data from the client request
    const worksample = await Worksample.findOneAndDelete({_id: id})
    
    if(!worksample) {
        return res.status(400).json({error: 'No such worksample'})
    }
    
    res.status(200).json(worksample)
    
}

// update a worksample
const updateWorksample = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such worksample'})
    }
    
    const worksample = await Worksample.findOneAndUpdate({_id: id}, {
        
        // use the spread operator to replace any data in the client request that matches data on the doc
        ...req.body
    })
    
    if(!worksample) {
        return res.status(400).json({error: 'No such worksample'})
    }
    
    res.status(200).json(worksample)
    
}

module.exports = {
    getWorksample,
    getWorksamples,
    createWorksample,
    deleteWorksample,
    updateWorksample
}