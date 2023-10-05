const appointmentController = require('../controllers/appointmentController');
const express = require('express');
const appointmentRouter = express.Router();

//CREATE-Post Method
appointmentRouter.post('/', appointmentController.createAppointment);
//READ-Get Method
appointmentRouter.get('/', appointmentController.getAppointment);
//READ-Get By Id
appointmentRouter.get('/:appointmentId', appointmentController.getAppointmentById);
//UPDATE-Patch Method
appointmentRouter.patch('/:appointmentId', appointmentController.updateAppointment);
//DELETE--Delete Method
appointmentRouter.delete('/:appointmentId', appointmentController.deleteAppointment);

module.exports = appointmentRouter;