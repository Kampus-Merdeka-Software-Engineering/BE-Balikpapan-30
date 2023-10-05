const { prisma } = require('../config/prisma');
const moment = require('moment');

// POST-Create Method
async function  createAppointment(date, nama, umur, gender, phone, reason, doctorName) {
    try {
        const doctor = await prisma.doctor.findFirst({
            where: {
                nama: doctorName,
            },
        });

        if (doctor) {
            const formatDate = `${date}T00:00:00.000Z`;
            const createAppointment = await prisma.appointment.create({
                data: {
                    date: formatDate,
                    nama,
                    umur,
                    gender,
                    phone,
                    reason,
                    doctor: {
                        connect: {
                            id: doctor.id,
                        },
                    },
                },
            });
            return createAppointment
        } else {
            throw new error(`Doctor '${doctor}' Nout Found`);
        }
    } catch (error) {
        console.error("Error in createAppointment: ", error);
        throw error;
    }
}

// const createAppointment = (appointment) => {
//     try {
//         const createAppointment = prisma.appointment.create({
//             data: {
//                 id: appointment.id,
//                 date: appointment.date + 'T00:00:00.000Z',
//                 nama: appointment.nama,
//                 umur: appointment.umur,
//                 gender: appointment.gender,
//                 phone: appointment.phone,
//                 reason: appointment.reason,
//                 id_doctor: appointment.id_doctor
//             }
//         })
//         return createAppointment;
//     } catch (error) {
//         console.log(error);
//     }
// }

// GET-Read Method
const getAppointment = async() => {
    try {
        const appointment = await prisma.appointment.findMany({
            include: {
                doctor: {
                    select: {
                        nama: true,
                    }
                }
            }
        });
        const formatDateAppointment = appointment.map(appointment => {
            return {
                ...appointment,
                date: moment(appointment.date).format('DD MMMM YYYY'),
            };
        });
        return formatDateAppointment;
    } catch (error) {
        console.log(error);
    }
}
const getAppointmentById = (appointmentId) => {
    try {
        const appointment = prisma.appointment.findUnique({
            where: {
                id: Number(appointmentId)
            }
        });
        return appointment;
    } catch (error) {
        console.log(error);
    }
}

 //PATCH-Update Method
 const updateAppointment = (appointment, appointmentId) => {
    try {
        const updatedAppointment = prisma.appointment.update({
            where: {
                id: Number(appointmentId)
            },
            data: {
                date: appointment.date + 'T00:00:00.000Z',
                nama: appointment.nama,
                umur: appointment.umur,
                gender: appointment.gender,
                phone: appointment.phone,
                reason: appointment.reason,
                id_doctor: appointment.id_doctor
            }
        })
        return updatedAppointment;
    } catch (error) {
        console.log(error);
    }
}

//DELETE-Delete Method
const deleteAppointment = (appointmentId) => {
    try {
        const deleteAppointment = prisma.appointment.delete({
            where: {
                id: Number(appointmentId)
            }
        })
        return deleteAppointment;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAppointment,
    getAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment
}