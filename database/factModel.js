const { mongoose, Schema, model } = require('mongoose')
const FactSchema = new Schema ({
date: {
    type: Date,
    default: Date.now(),
},
    userId: String,
    title: String,
    text: String,
    like: [],
    dislike: [],
});

const postModel = model("Fact", FactSchema);
module.exports = postModel;