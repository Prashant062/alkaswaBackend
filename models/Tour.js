import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    bookingPrice: {
      type: Number,
      required: true,
    },
    jobDetails: [
      {
        vacancy: String,
        position: String,
        salary: String,
        jobDescription: String
      },
    ],
    note: {
      type: String,
      required: true,
    },
    bookingPolicy: {
      type: String,
      required: true,
    },
    cancellationPolicy: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
