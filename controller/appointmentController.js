const userModel = require('../models/appointmentModels')

//CREATE-Post Method
const createAppointment = async (req, res) => {
    const {body} = req;
    try {
        await userModel.createAppointment(body);
        res.json({
            message: "Succesfully Add Data",
            data: body
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

//READ-Get Method
const getAllAppointment = async(req, res) => {
    const [data] = await userModel.getAllAppointment();
    try {
        res.json({
            message: "Succesfully Show Data",
            data: data
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

//UPDATE-Patch Method
const updateAppointment = async(req, res) => {
    const {body} = req;
    const {idAppointment} = req.params;
    try {
        await userModel.updateAppointment(body, idAppointment);
        res.json({
            message: "Succesfully Update Data",
            data: body
        })
    } catch (error) {
        res.json({
            message: Error
        })
    }
}

//DELETE-Delete Method
const deleteAppointment = async(req, res) => {
    const {idAppointment} = req.params;
    try {
        await userModel.deleteAppointment(idAppointment);
        res.json({
            message: "Succesfully Delete Data"
        })
    } catch (error) {
        res.json({
            message: Error,
            data: data
        })
    }
}

module.exports = {
    createAppointment,
    getAllAppointment,
    updateAppointment,
    deleteAppointment
}