const express = require('express');
const router = express.Router();

// Import Error Handler
const HttpError = require('../models/http-error');

router.get('/', (req, res, next) => {
    res.status(200).send('Successful!')
})

// Demo to throw an error if any
/*
    if (!place) {
        throw new HttpError('Could not find a place', 404);
    }
*/

module.exports = router;