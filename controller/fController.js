const FactModel = require("../database/schema/FactModel")

const createFact = async (req, res) => {
    const body = req.body
    try {
        const fact = await FactModel.create(body)
        res.status(200).send(fact) 
    } catch (e) {
        console.log(e)
    }
}

const getFacts = async (req, res) => {
    try {
        const fact = await FactModel.find({})
        res.status(200).send(fact)
    } catch (error) {
        console.log(error)
    }
}

const getFact = async (req, res) => {

}