const getHomePage = (req, res, next) => {
    res.status(200).send('Successful!')
}

exports.getHomePage = getHomePage;