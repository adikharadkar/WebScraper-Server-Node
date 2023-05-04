const User = require('../models/user');
const HttpError = require('../models/http-error');
const crypto = require('crypto');

const postSignupData = async (req, res, next) => {
    const {username, email, password} = req.body;

    // Generating a random salt of 16 bytes
    const salt = crypto.randomBytes(16).toString('hex');

    // Creating a hash of a password
    const hash = crypto.createHmac('sha256', salt)
                        .update(password)
                        .digest('hex');

    // Sending the username, email, hashed password and salt to the database
    const userData = new User({
        username,
        email,
        password: hash,
        salt
    });
    try {
        await userData.save();
    } catch (err) {
        const error = new HttpError(
            'User registration failed, please try again!',
            500
        );
        return next(err);
    }
    
    res.status(201).json(userData);
}

exports.postSignupData = postSignupData;