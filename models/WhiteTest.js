const mongoose = require('C:/Users/Asus/Downloads/compte_rendu/node_modules/mongoose')
const joi = require('joi')

const wtSchema = new mongoose.Schema({
    title: String,
    available:{ type: [Date], default: Date.now()},
    users : [{
        name : String,
        id : {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    description: String

})

let wtValidation = new joi.object({
    title: joi.string().min(2).required(),
    available: joi.array().items(joi.date())
})

let wt = new mongoose.model('wt',wtSchema)

module.exports.wt = wt
module.exports.wtValidation = wtValidation
