const { Router } = require('express')
const { CreateUser, loginUser } = require('../controller//uController');
const userModel = require('../database/userModel');
const router = Router();

const validataEmail = async (req, res, next) => {
    const userData = req.body
    const user = await userModel.findOne({ email: userData.email })
    if (!user) {
        next()
    } else {
        res.status(403).send({ messages: "Email is already taken" })
    }
}

router.post('/signup', validataEmail, CreateUser)
router.post('/login', loginUser)

module.exports = router