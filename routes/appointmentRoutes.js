const express = require('express');
const router = express.Router();

//Controller
const appointmentController = require('../controller/appointmentController');

//CREATE-POST Method
router.post('/', appointmentController.createAppointment);
//READ-GET Method
router.get('/', appointmentController.getAllAppointment);
//UPDATE-PATCH Method
router.patch('/:idAppointment', appointmentController.updateAppointment);
//DELETE--DELETE Method
router.delete('/:idAppointment', appointmentController.deleteAppointment);

module.exports = router;