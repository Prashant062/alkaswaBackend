import express from 'express';
import {
    createUmrahBooking,
    getSingleUmrahBooking,
    getAllUmrahBookings,
    deleteUmrahBooking // Import the deleteUmrahBooking function
} from '../controllers/umrahBookingController.js';

const router = express.Router();

// Create a new Umrah booking
router.post('/', createUmrahBooking);

// Get a single Umrah booking
router.get('/:id', getSingleUmrahBooking);

// Get all Umrah bookings
router.get('/', getAllUmrahBookings);

// Delete a single Umrah booking
router.delete('/:id', deleteUmrahBooking);

export default router;
