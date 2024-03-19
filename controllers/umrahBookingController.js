import UmrahBooking from '../models/UmrahBooking.js';

// Create a new Umrah booking
export const createUmrahBooking = async (req, res) => {
    try {
        const umrahBooking = new UmrahBooking({
            name: req.body.name,
            number: req.body.number,
            email: req.body.email,
            nationality: req.body.nationality,
            city: req.body.city,
            commentSection: req.body.commentSection,
            payment: req.body.payment,
            numberOfPeople: req.body.numberOfPeople,
            passportNumber: req.body.passportNumber // Include passportNumber field
        });
        const savedUmrahBooking = await umrahBooking.save();
        res.status(201).json(savedUmrahBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get single Umrah Booking
export const getSingleUmrahBooking = async (req, res) => {
    try {
        const umrahBooking = await UmrahBooking.findById(req.params.id);
        if (!umrahBooking) {
            return res.status(404).json({ message: 'Umrah booking not found' });
        }
        res.status(200).json(umrahBooking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get All Umrah Bookings
export const getAllUmrahBookings = async (req, res) => {
    try {
        const umrahBookings = await UmrahBooking.find();
        res.status(200).json(umrahBookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUmrahBooking = async (req, res) => {
    try {
        const umrahBooking = await UmrahBooking.findByIdAndDelete(req.params.id);
        if (!umrahBooking) {
            return res.status(404).json({ message: 'Umrah booking not found' });
        }
        res.status(200).json({ message: 'Umrah booking deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};