const express = require('express');
const { purchaseTip } = require('../controllers/tipController');
const router = express.Router();

router.post('/purchase-a-tip', purchaseTip);

module.exports = router;