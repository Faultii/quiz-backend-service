const { mongoose, Schema } = require('mongoose')

const userSchema = new Schema ({
    email: String,
    password: String,
    username: String,
    age: Number,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel
