import dotenv from 'dotenv';``
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from './constants.js';
import connectDB from "./db/db.js";
// import { app } from './app.js';
// Load environment variables
dotenv.config({
    path: './.env'  // Ensure the correct path to .env file
});

const app = express(); // Define the express app

// Connect to MongoDB
connectDB()
    .then(() => {
        // Start the server only after DB connection is successful
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });

/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        app.on("error", (error) => {
            console.log("ERR", error);
            throw error;
        });

        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });

    } catch (error) {
        console.log("Connection error", error);
    }
})();
*/
