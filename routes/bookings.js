import express from 'express';
import { createBooking, getSingleBooking, getAllBookings, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

// Create a new booking
router.post('/', createBooking);

// Get a single booking
router.get('/:id', getSingleBooking);

// Get all bookings
router.get('/', getAllBookings);

// Delete a booking
router.delete('/:id', deleteBooking);

export default router;
