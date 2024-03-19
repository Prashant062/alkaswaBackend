import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    passportNumber: {
        type: String, 
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true
    },
    payment: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
