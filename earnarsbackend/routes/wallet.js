const express = require('express');
const { unlockWallet } = require('../controllers/walletController');
const router = express.Router();

router.post('/unlock-a-wallet', unlockWallet);

module.exports = router;