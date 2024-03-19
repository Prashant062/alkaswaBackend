import Tour from "../models/Tour.js";
import Umrah from "../models/Umrah.js";

export const createUmrah = async (req, res) => {
    const newUmrah = new Umrah(req.body);
    try {
        const savedUmrah = await newUmrah.save();
        res.status(200).json({ success: true, message: 'Successfully created', data: savedUmrah });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
}

export const updateUmrah = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUmrah = await Umrah.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUmrah) {
            return res.status(404).json({
                success: false,
                message: "Umrah not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Umrah updated successfully",
            data: updatedUmrah,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to update Umrah",
            error: error.message,
        });
    }
};

export const deleteUmrah = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUmrah = await Umrah.findByIdAndDelete(id);
        if (!deletedUmrah) {
            return res.status(404).json({
                success: false,
                message: "Umrah not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Umrah deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete Umrah",
            error: error.message,
        });
    }
}

export const getSingleUmrah = async (req, res) => {
    const id = req.params.id;
    try {
        const umrah = await Umrah.findById(id);
        if (!umrah) {
            return res.status(404).json({
                success: false,
                message: "Umrah not found",
            });
        }
        res.status(200).json({
            success: true,
            data: umrah,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Umrah",
            error: error.message,
        });
    }
}


export const getAllUmrah = async (req, res) => {
    const page = parseInt(req.query.page);
   console.log(page);
    try {
        const umrahs = await Umrah.find({}).skip(page * 8).limit(8);

        res.status(200).json({
            success: true,
            count: umrahs.length,
            data: umrahs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch Umrahs",
            error: error.message,
        });
    }
}

//get umrah Counts

export const getUmrahCounts = async (req, res) => {
    try {
        const umrahCount = await Umrah.estimatedDocumentCount();
        res.status(200).json({ success: true, data: umrahCount });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch Umrah count", error: error.message });
    }
}

