const bcrypt = require('bcrypt');
const userModel = require('../database/userModel');

const CreateUser = async (req, res) => {
    const userData = req.body
    const saltRounds = 10;
    const password = userData.password
    const hash = bcrypt.hashSync(password, saltRounds);
    console.log('password ==>', password)
    console.log('hashedPassword ==>', hash)     
    const data = { ...userData, password: hash }
    try {
        await userModel.create(data)
        res.status(200).send({ message: "user created" })
    } catch (error) {
        res.status(500).send(error)
    }
}

const loginUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try {
        const user = await userModel.findOne({ email: email })
        const hasedPassword = user.password
        const isUser = bcrypt.compareSync(password, hasedPassword)
        if (isUser) {
            res.status(200).send({ message: "Successfully entered!" })
        } else {
            res.status(400).send({ message: "Check your email or password" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {CreateUser,loginUser }