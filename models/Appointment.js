const mongoose = require('mongoose')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

let appointmentSchema = new mongoose.Schema({
    etudiant: {
        email: String,
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    },
    certification: {
        name: String,

        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'wt'
        }
    },
    appointmentDate: {
        type: Date,

    }
});


let appointmentValidation = Joi.object({
    etudiant: {
        email: Joi.string(),
        id: Joi.objectId()
    },
    certification: {
        name: Joi.string(),
        id: Joi.objectId()
    },
    appointmentDate: Joi.date(),
})

let Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports.Appointment = Appointment;
module.exports.appointmentValidation = appointmentValidation;
