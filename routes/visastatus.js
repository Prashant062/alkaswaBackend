// In your visaStatusRouter.js file

import express from 'express';
import { checkVisaStatus, updateVisaStatus, deleteVisaStatus, getAllVisaStatus } from '../controllers/visaStatusController.js';

const router = express.Router();

// Check visa status by passport number
router.post('/check', checkVisaStatus);

// Update or create visa status by passport number
router.post('/update', updateVisaStatus);

// Delete visa status by passport number
router.delete('/delete', deleteVisaStatus);

// Get all visa status data
router.get('/all', getAllVisaStatus);

export default router;
