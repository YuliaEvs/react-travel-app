import { addTrip, getAllTrips, toggleTripDone, updateTrip, deleteTrip } from '../../controllers/api/trips';
import express, { Router } from 'express';

const router = express.Router();

// POST /api/trips/list/items/:id
router.post('/trip/:id', addTrip);
// GET /api/trips/history
router.get('/trips/history', getAllTrips);

router.get('/trips/:id', toggleTripDone);

router.put('/trips/:id', updateTrip);

router.delete('/trips/:id', deleteTrip);

module.exports = router;