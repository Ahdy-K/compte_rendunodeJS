const mongoose = require('mongoose')
const joi = require('joi')

let wtSchema = new mongoose.Schema({
    title:{
        String,
        required:true
    },
    available: Boolean
})

let wtValidation = new joi.object({
    title: joi.string().min(2).required(),
    available: joi.boolean()
})

let wt = new mongoose.model('wt',wtSchema)

module.exports.wt = wt
module.exports.wtValidation = wtValidation
