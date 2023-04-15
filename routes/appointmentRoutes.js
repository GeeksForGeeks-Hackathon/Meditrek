const express = require('express');

const { appointmentController } = require('../controllers/appointmentCtrl');

//Router inject
const router = express.Router();

router.post('/appointment',appointmentController);

module.exports=router