const doctorService = require('../services/doctorService');

// POST-Create Method
async function createDoctor(req, res) {
    try {
        const doctor = await doctorService.createDoctor(req.body);
        res.status(201).json({
            message: "Success Create Data",
            data: doctor
        });
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// GET-Read Method
async function getDoctor(req, res) {
    try {
        const doctor = await doctorService.getDoctor();
        res.status(200).json({
            message: "Success Show Data",
            data: doctor
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// GET-Read Method By Id
async function getDoctorById(req, res) {
    const {doctorId} = req.params;
    try {
        const doctor = await doctorService.getDoctorById(doctorId);
        if(!doctor) {
            res.status(404).json({message: "Doctor Not Found!"})
        }
        res.status(200).json({
            message: "Success Show Data",
            data: doctor
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// PATCH-Update Method
async function updateDoctor(req, res) {
    const {doctorId} = req.params;
    const {body} = req;
    try {
        await doctorService.updateDoctor(body, doctorId);
        res.status(200).json({
            message: "Success Update Data"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

//DELETE-Delete Method
async function deleteDoctor(req, res) {
    const {doctorId} = req.params;
    try {
        await doctorService.deleteDoctor(doctorId);
        res.status(200).json({
            message: "Success Delete Data"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// TEST
async function getDoctorsBySpecialist(req, res) {
    const { specialist } = req.body;
  
    try {
        const doctors = await doctorService.getDoctorsBySpecialist(specialist);
        res.json(doctors);
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    createDoctor,
    getDoctor,
    getDoctorById,
    updateDoctor,
    deleteDoctor,
    getDoctorsBySpecialist
}