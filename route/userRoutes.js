const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// POST User
router.post("/register", userController.createUser)

// Validate User
router.post("/validate", userController.validateUser)

module.exports = router;