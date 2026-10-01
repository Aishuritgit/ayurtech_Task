const express = require('express');

const router = express.Router();

const { calculateAvg } = require('../controllers/avgController');

const validateNumber = require('../middleware/validateNumber');

router.post("/average", validateNumber, calculateAvg);

module.exports = router;