require('dotenv').config();
const express = require('express');
const cors = require('cors');
const appointmentRouter = require('./routes/appointmentRoute');
const doctorRouter = require('./routes/doctorRoute');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Appointment Routes
app.use('/appointment', appointmentRouter);
app.use('/doctor', doctorRouter);


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})