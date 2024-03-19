import mongoose from "mongoose";

const umrahSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    packageCode: {
      type: String,
      required: true,
    },
    hotelDetails: [
      {
        city: String,
        hotel: String,
        category: String,
        nights: Number,
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
  },
  { timestamps: true }
);

export default mongoose.model("Umrah", umrahSchema);
