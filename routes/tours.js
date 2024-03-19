import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCounts, updateTour } from "./../controllers/tourController.js";

const router = express.Router();

// Create new Tour
router.post("/", createTour);

// Update Tour
router.put("/:id", updateTour); // Use PUT method for update

// Delete Tour
router.delete("/:id", deleteTour); // Use DELETE method for deletion

// Get Single Tour
router.get("/:id", getSingleTour); // Use GET method for fetching a single tour

// Get All Tours
router.get("/", getAllTour); // Use GET method for fetching all tours

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTour", getFeaturedTour)
router.get("/search/getTourCounts", getTourCounts)

export default router;
