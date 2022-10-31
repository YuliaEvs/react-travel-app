const express = require('express');
const router = express.Router();
const tripsCtrl = require('../../controllers/api/trips');

// GET /api/trips/list
router.get('/list', tripsCtrl.list);
// GET /api/trips/history
router.get('/history', tripsCtrl.history);
// POST /api/trips/list/items/:id
router.post('/list/items/:id', tripsCtrl.addToList);

module.exports = router;