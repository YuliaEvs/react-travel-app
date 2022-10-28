const express = require('express');
const router = express.Router();
const tripsCtrl = require('../../controllers/api/trips');

// POST /api/trips
router.post('/trips/new', tripsCtrl.create);

router.post('/trips', tripsCtrl.create);

module.exports = router;