import { addTrip, getAllTrips, updateTrip, deleteTrip } from '../../controllers/api/trips';
import express, { Router } from 'express';

const router = express.Router();

router.post('/trip/:id', addTrip);

router.get('/trips', getAllTrips);

router.put('/trips/:id', updateTrip);

router.delete('/trips/:id', deleteTrip);

module.exports = router;