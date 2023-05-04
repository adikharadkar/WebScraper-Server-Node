const postLoginData = (req, res, next) => {
    const {email, password} = req.body;

    const loginData = {
        email,
        password
    }
    
    res.status(201).json(loginData);
}

exports.postLoginData = postLoginData;