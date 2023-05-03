const postSignupData = (req, res, next) => {
    const {username, email, password} = req.body;

    const userData = {
        username,
        email,
        password
    }
    console.log(req.body.username);
    res.status(201).json(userData);
}

exports.postSignupData = postSignupData;