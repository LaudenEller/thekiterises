// uses parameters set in .env file
require('dotenv').config()

// uses NodeJS Express, set up in package.json dependencies
const express = require('express')

// uses Mongoose, set up in package.json dependencies
const mongoose = require('mongoose')

// save the worksamples.js routes file to a local variable
const worksampleRoutes = require('./routes/worksamples')

// saves node express instance in a new variable
const app = express()


// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/worksamples', worksampleRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {

    //listen for requests from client
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port:', process.env.PORT)
    })

})
.catch((error) => {
    console.log(error)
})

