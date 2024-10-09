import mongoose from "mongoose";
 
import { DB_NAME } from "../constants";

const connectDB=async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST:
            ${connnectionInstance.connection.host}`)
    } catch (error) {
        console.log("its an error",error)
        process.exit(1)
    }
}

export default connectDB