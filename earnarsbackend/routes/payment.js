const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/paymentController');

// Define route for payment initialization
router.post('/initiate-payment', initiatePayment);

module.exports = router;
