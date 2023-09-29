const dbPool = require('../config/database');

//CREATE-Post Method
const createAppointment = (body) => {
    const sqlQuery = `INSERT INTO appointment (nama, umur, gender, phone, reason, id_doctor) VALUES ('${body.nama}', '${body.umur}', '${body.gender}', '${body.phone}', '${body.reason}', '${body.id_doctor}')`
    return dbPool.execute(sqlQuery);
}

//READ-Get Method
const getAllAppointment = () => {
    const sqlQuery = 'SELECT * FROM appointment';
    return dbPool.execute(sqlQuery);
}

//UPDATE-Patch Method
const updateAppointment = (body, idAppointment) => {
    const sqlQuery = `UPDATE appointment SET nama='${body.nama}', umur='${body.umur}', gender='${body.gender}', phone='${body.phone}', reason='${body.reason}', id_doctor='${body.id_doctor}' WHERE id=${idAppointment}`
    return dbPool.execute(sqlQuery);
}

//DELETE-Delete Method
const deleteAppointment = (idAppointment) => {
    const sqlQuery = `DELETE FROM appointment WHERE id=${idAppointment}`
    return dbPool.execute(sqlQuery);
}

module.exports = {
    createAppointment,
    getAllAppointment,
    updateAppointment,
    deleteAppointment
}