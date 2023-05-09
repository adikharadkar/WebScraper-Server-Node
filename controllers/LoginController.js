const HttpError = require('../models/http-error');
const User = require('../models/user');
const crypto = require('crypto');

const postLoginData = async (req, res, next) => {
    const {email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email: email})
    } catch (err) {
        const error = new HttpError(
            'Logging in failed, please try again later',
            500
        )
        return next(error);
    }

    // Generating a random salt of 16 bytes
    const salt = crypto.randomBytes(16).toString('hex');

    // Creating a hash of a password
    const hash = crypto.createHmac('sha256', salt)
                        .update(password)
                        .digest('hex');

    User.findOne({email: email}).then(user => {
        if (user) {
            res.status(200).send(user["salt"])
            return
        } else {
            res.send("Error")
            return
        }
    })

    const loginData = {
        email,
        password
    }
    
    res.status(201).json(loginData);
}

exports.postLoginData = postLoginData;