import express from "express";
import { createUmrah, deleteUmrah, getAllUmrah, getSingleUmrah, getUmrahCounts, updateUmrah } from "../controllers/umrahController.js";

const router = express.Router();

// Create new Umrah
router.post("/", createUmrah);

// Update Umrah
router.put("/:id", updateUmrah);

// Delete Umrah
router.delete("/:id", deleteUmrah);

// Get Single Umrah
router.get("/:id", getSingleUmrah);

// Get Umrah Counts
router.get("/search/getUmrahCounts", getUmrahCounts);

// Get All Umrahs
router.get("/", getAllUmrah);

export default router;
