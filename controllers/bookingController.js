import Booking from '../models/Booking.js';

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const booking = new Booking({
            name: req.body.name,
            passportNumber: req.body.passportNumber,
            mobileNo: req.body.mobileNo,
            emailId: req.body.emailId,
            payment: req.body.payment,
            tour: req.body.tourId 
        });
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get single Booking
export const getSingleBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete a booking
export const deleteBooking = async (req, res) => {
    try {
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully', deletedBooking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
