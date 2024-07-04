const jwt = require('jsonwebtoken');
const User = require('../config/User')

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    //check json web token exists & its verified
    if (token) {
        jwt.verify(token, 'radientjewel', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/')
            } else {
                console.log(decodedToken)
                next();
            }
        })
    }
    else {
        res.redirect('signup/')
    }
}


//check user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'radientjewel', async (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.locals.user = null
                next()
            } else {
                let user = await User.findById(decodedToken.id)
                res.locals.user = user
                next();
            }
        })
    }
    else{
        res.locals.user = null
        next()
    }

}
module.exports = { requireAuth , checkUser}