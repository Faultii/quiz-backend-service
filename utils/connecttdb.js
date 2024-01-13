const mongoose = require('mongoose')

const connectDatabase = async () => {
    res = await mongoose.connect('mongodb+srv://dvboogii:boogii1234@cluster0.whtvku9.mongodb.net/')
    if (res) console.log('db connected')
}

module.exports = connectDatabase