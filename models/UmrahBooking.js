import mongoose from 'mongoose';

const umrahSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    commentSection: {
        type: String
    },
    payment: {
        type: Number,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    passportNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('UmrahBooking', umrahSchema);
