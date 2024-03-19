// In your visaStatusController.js file

import VisaStatus from '../models/VisaStatus.js';

export const checkVisaStatus = async (req, res) => {
    try {
        const { passportNumber } = req.body;
        const visaStatus = await VisaStatus.findOne({ passportNumber });
        if (!visaStatus) {
            res.status(404).json({ message: "Visa status not found" });
            return;
        }
        res.status(200).json({ name: visaStatus.name, status: visaStatus.status });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateVisaStatus = async (req, res) => {
    try {
        const { passportNumber, name, status } = req.body;
        let visaStatus = await VisaStatus.findOne({ passportNumber });
        if (!visaStatus) {
            visaStatus = new VisaStatus({ passportNumber, name, status });
        } else {
            visaStatus.status = status;
            if (name) {
                visaStatus.name = name;
            }
        }
        const savedVisaStatus = await visaStatus.save();
        res.status(200).json(savedVisaStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteVisaStatus = async (req, res) => {
    try {
        const { passportNumber } = req.body;
        const deletedVisaStatus = await VisaStatus.findOneAndDelete({ passportNumber });
        if (!deletedVisaStatus) {
            res.status(404).json({ message: "Visa status not found" });
            return;
        }
        res.status(200).json({ message: "Visa status deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllVisaStatus = async (req, res) => {
    try {
        const allVisaStatus = await VisaStatus.find();
        res.status(200).json(allVisaStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};