import Tour from '../models/Tour.js';

// Create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save();
        res.status(200).json({ success: true, message: 'Successfully created', data: savedTour });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
}

// Update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTour) {
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Tour updated successfully",
            data: updatedTour,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update tour",
            error: error.message,
        });
    }
};

// Delete Tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedTour = await Tour.findByIdAndDelete(id);
        if (!deletedTour) {
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Tour deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete tour",
            error: error.message,
        });
    }
}

// Get Single Tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);
        if (!tour) {
            return res.status(404).json({
                success: false,
                message: "Tour not found",
            });
        }
        res.status(200).json({
            success: true,
            data: tour,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tour",
            error: error.message,
        });
    }
}

// Get All Tours
export const getAllTour = async (req, res) => {
    try {
        const tours = await Tour.find({});
        res.status(200).json({ success: true, count: tours.length, data: tours, });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tours",
            error: error.message,
        });
    }
}

// Get Tour by Search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i');
    try {
        const tours = await Tour.find({ city });
        res.status(200).json({ success: true, message: "Successful", data: tours });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch tours", error: error.message });
    }
}

// Get Featured Tours
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true });
        res.status(200).json({ success: true, message: "Successful", data: tours });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch featured tours",
            error: error.message,
        });
    }
}

// Get Tour Counts
export const getTourCounts = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch tour counts", error: error.message });
    }
}
