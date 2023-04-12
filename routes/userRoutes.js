const express = require('express');
const {
  loginController,
  registerController,
} = require("../controllers/userCtrl");

//Router inject
const router = express.Router();

//Routes

//Route Login

//For login page
router.post('/login', loginController);

//For register page
router.post('/register', registerController);

module.exports = router;
