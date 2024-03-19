import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import tourRoute from './routes/tours.js';
import bookingRoute from './routes/bookings.js';
import umrahRoute from './routes/umrahs.js';
import umrahBookingRoute from './routes/umrahbookings.js';
import visaStatusRouter from './routes/visastatus.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        }); 
        console.log("MongoDB database connected");
    } catch (error) {
        console.error("MongoDB database connection failed:", error);
    }
};

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoute);
app.use('/booking', bookingRoute);
app.use('/umrahs', umrahRoute);
app.use('/umrahbookings', umrahBookingRoute);
app.use('/visa', visaStatusRouter);

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
    connect();
    console.log('server listening on port', port);
});
