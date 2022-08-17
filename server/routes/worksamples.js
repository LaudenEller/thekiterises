// import Express
const express = require('express')

// import API functions for worksample resource
const {
    createWorksample,
    getWorksample,
    getWorksamples,
    deleteWorksample,
    updateWorksample
} = require('../controllers/worksampleController')

// save Express router to new variable
const router = express.Router()

// route each API function to the matching route method
router.get('/', getWorksamples)
router.get('/:id', getWorksample)
router.post('/', createWorksample)
router.delete('/:id', deleteWorksample)
router.patch('/:id', updateWorksample)

// export router variable
module.exports = router