const express = require('express')

const cors = require('cors')
const connectDatabase = require('./utils/connecttdb.js')
const router = require('./routes/router.js')
const userModel = require('./database/userModel.js')

const app = express()
const port = 4200
app.use(express.json())
app.use(cors())

app.use(router);

connectDatabase()

app.listen(port, () => {
    console.log(`Your backend is listening at, ${port}`)
})