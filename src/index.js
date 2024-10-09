require('dotenv').config()



import mongoose from  "mongoose";
import { DB_NAME } from "./constants";
import connectDB from "./db/db";





connectDB();

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