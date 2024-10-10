// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from './constants.js';
import connectDB from "./db/db.js";

dotenv.config({
    path: './.env'  // Ensure the correct path to .env file
});

// Your database connection and other logic




connectDB()
.then(()=>{
    append.listen(process.env.PORT|| 8000)
console.log(`server is running at port:${process.env.PORT}`)
})
.catch((err)=>{
console.log("MongoDb connection fails",err)
})
/*import express from "express";
const app= express()

(async () => {
    try {
        await mongoose .connect(`${process.
            env.MONGODB_URI}/$DB_NAME`)
             app.on("error",(error)=>{
                console.log("ERR",error);
                throw error
             })

             app.listen(process.env.PORT,()=>{
               console.log(`App is listening on port ${port.env.PORt}`) 
             })

    } catch (error) {
        console.log("error h bete",error )
    }
})
    */