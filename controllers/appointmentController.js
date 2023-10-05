const appointmentService = require('../services/appointmentService');

// POST-Create Method
async function createAppointment(req, res) {
    const {date, nama, umur, gender, phone, reason, doctorName} = req.body;
    try {
        const appointment = await appointmentService.createAppointment(date, nama, umur, gender, phone, reason, doctorName);
        res.status(201).json({
            message: "Success Create Data",
            data: appointment
        });
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// GET-Read Method
async function getAppointment(req, res) {
    try {
        const appointment = await appointmentService.getAppointment();
        res.status(200).json({
            message: "Success Show Data",
            data: appointment
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// GET-Read Method By Id
async function getAppointmentById(req, res) {
    const {appointmentId} = req.params;
    try {
        const appointment = await appointmentService.getAppointmentById(appointmentId);
        if(!appointment) {
            res.status(404).json({message: "Appointment Not Found"})
        }
        res.status(200).json({
            message: "Success GET Appointment",
            data: appointment
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// PATCH-Update Method
async function updateAppointment(req, res) {
    const {appointmentId} = req.params;
    const {body} = req;
    try {
        await appointmentService.updateAppointment(body, appointmentId);
        res.status(200).json({
            message: "Success Update Data"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// DELETE-Delete Method
async function deleteAppointment(req, res) {
    const {appointmentId} = req.params;
    try {
        await appointmentService.deleteAppointment(appointmentId);
        res.status(200).json({
            message: "Success Delete Data"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

module.exports = {
    createAppointment,
    getAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
}