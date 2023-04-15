const appointmentModel = require("../models/AppointmentModels");


const appointmentController = async (req, res) => {
    try {
      const newAppointment = new appointmentModel(req.body);
      await newAppointment.save();
      res.status(201).send({ message: "Appointment Request Sent Successfully", success: true });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Appointment Controller ${error.message}`,
      });
    }
  };
  
  module.exports = { appointmentController};