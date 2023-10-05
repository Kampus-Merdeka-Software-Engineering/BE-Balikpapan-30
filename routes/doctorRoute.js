const doctorController = require('../controllers/doctorController');
const express = require('express');
const doctorRouter = express.Router();

//CREATE-Post Method
doctorRouter.post('/', doctorController.createDoctor);
//READ-Get Method
doctorRouter.get('/', doctorController.getDoctor);
//READ-Get By Id
doctorRouter.get('/:doctorId', doctorController.getDoctorById);
//UPDATE-Patch Method
doctorRouter.patch('/:doctorId', doctorController.updateDoctor);
//DELETE--Delete Method
doctorRouter.delete('/:doctorId', doctorController.deleteDoctor);
//TEST
doctorRouter.post('/specialist', doctorController.getDoctorsBySpecialist);

module.exports = doctorRouter;