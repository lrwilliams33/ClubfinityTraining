const express = require('express');
const router = express.router;
const registerController = require('../controllers/registerController');

router.post('/', registerController.handleNewUser);

module.exports = router;