const router = require('express').Router();
const { Appointment, appointmentValidation } = require('../models/Apointment');

const auth = require('../middlewares/auth')
const authorization = require('../middleware/authorization');


router.post('', auth, async (req, res) => {
    try {
        let result_valid = appointmentValidation.validate(req.body);
        if (result_valid.error)
            return res.status(400).send(result_valid.error.details[0].message);

        let appointment = new Appointment(req.body);

        appointment = await appointment.save();
        res.status(201).send(appointment);
    } catch (error) {
        res.status(400).send('Problem saving Apoointment : ' + error.message)
    }

});

// get all Appointments
router.get('', [auth, authorization], async (req, res) => {

    let appointment = await Appointment.find();
    res.send(appointment);
});
module.exports = router
