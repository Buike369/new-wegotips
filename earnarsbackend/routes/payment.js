const express = require('express');
const router = express.Router();
const { initiatePayment } = require('../controllers/paymentController');
const { deposit, callbackU, addPersonalInformation, getPersonalInformation } = require('../controllers/userController');

// Define route for payment initialization
router.post('/initiate-payment', initiatePayment);
// POST: add a deposit system
router.post('/deposit', deposit);
router.post('/payment-callback', callbackU);
// POST: add personal information
router.post('/personal_information', addPersonalInformation);

// GET: Retrieve personal information by user ID
router.get('/personal_information/:user_id', getPersonalInformation);

module.exports = router;
