const { prisma } = require('../config/prisma');

// POST-Create Method
const createDoctor = (doctor) => {
    try {
        const createDoctor = prisma.doctor.create({
            data: {
                id: doctor.id,
                nama: doctor.nama,
                specialist: doctor.specialist
            }
        })
        return createDoctor;
    } catch (error) {
        console.log(error);
    }
}

// GET-Read Method
const getDoctor = () => {
    try {
        const doctor = prisma.doctor.findMany();
        return doctor;
    } catch (error) {
        console.log(error);
    }
}
const getDoctorById = (doctorId) => {
    try {
        const doctor = prisma.doctor.findUnique({
            where: {
                id: Number(doctorId)
            }
        });
        return doctor;
    } catch (error) {
        console.log(error);
    }
}

 //PATCH-Update Method
 const updateDoctor = (doctor, doctorId) => {
    try {
        const updatedDoctor = prisma.doctor.update({
            where: {
                id: Number(doctorId)
            },
            data: {
                nama: doctor.nama,
                specialist: doctor.specialist
            }
        })
        return updatedDoctor;
    } catch (error) {
        console.log(error);
    }
}

//DELETE-Delete Method
const deleteDoctor = (doctorId) => {
    try {
        const deleteDoctor = prisma.doctor.delete({
            where: {
                id: Number(doctorId)
            }
        })
        return deleteDoctor;
    } catch (error) {
        console.log(error);
    }
}

// TEST
async function getDoctorsBySpecialist(specialist) {
    try {
    const doctors = await prisma.doctor.findMany({
        where: {
            specialist: specialist,
        },
        select: {
            nama: true,
        },
    });
    return doctors;
    } catch (error) {
        throw error;
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