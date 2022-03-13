const mongoose = require('mongoose');
const joi = require('joi')

const userSchema = new mongoose.Schema({
    name: {String,
            required: true
    },
    email: {String,
        required: true
    },
    grade:{String,
           required}
           ,
    role:{String,
           defaultValue: 'student'}
})

const userValidation = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    grade: joi.string()
})
const user = new mongoose.model('user',userSchema)
module.exports.userValidation = userValidation
module.exports.user = user