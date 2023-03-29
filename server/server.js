// uses parameters set in .env file
require('dotenv').config()

// uses NodeJS Express, set up in package.json dependencies
const express = require('express')

// uses Mongoose, set up in package.json dependencies
const mongoose = require('mongoose')

// save the worksamples.js routes file to a local variable
const worksampleRoutes = require('./routes/worksamples')

// uses Express's built-in Path module to construct a file path dynamically based on the file structure
const path = require('path')

// saves node express instance in a new variable
const app = express()

// uses NPM's built-in cors module to support cross-origin requests
const cors = require('cors');

// saves urls that will be allowed to send cross-origin requests to local variable
const allowedOrigins = ['http://localhost:3000'];

// creates instance for handling cross-origin requests
app.use(cors());
// tells the server which cross-origin requests to allow and what to do when they're not allowed
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}
))

// middleware for static file requests
app.use(express.static(path.join(__dirname, 'public')))

// middleware for json requests
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

