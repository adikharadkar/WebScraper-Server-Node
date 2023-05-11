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

    try {
        let salt = existingUser.salt;
        let userPassword = existingUser.password;
        // Creating a hash of a password
        const hash = crypto.createHmac('sha256', salt)
                            .update(password)
                            .digest('hex');
        console.log("Login Successful!")
        res.status(201).send("Log in Successful");
    } catch(err) {
        const error = new HttpError(
            'Incorrect password',
            500
        )
        return next(error)
    }

    const loginData = {
        email,
        password
    }
}

exports.postLoginData = postLoginData;