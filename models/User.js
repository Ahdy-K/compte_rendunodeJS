const mongoose = require('mongoose');
const joi = require('joi')

const userSchema = new mongoose.Schema({
    name: {type:String,
            required: true
    },
    email: {type:String,
        required: true
    },
    grade:{type: String,
           required: true}
           ,
    wts : [{
            name : String,
            id : {
                type : mongoose.Schema.Types.ObjectId,
                ref: 'wt'
            }
        }],
    role:{type: String,
           defaultValue: "user"}
})

const userValidation = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    grade: joi.string()
})
const user = new mongoose.model('user',userSchema)
module.exports.userValidation = userValidation
module.exports.user = user