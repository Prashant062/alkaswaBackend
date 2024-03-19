import mongoose from 'mongoose';

const visaStatusSchema = new mongoose.Schema({
    passportNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Rejected', 'Approved'],
        required: true
    }
}, { timestamps: true });

export default mongoose.model('VisaStatus', visaStatusSchema);
