import mongoose, { Schema } from "mongoose";  // Correctly importing mongoose and Schema

const videoSchema = new Schema({  
    
});

export const Video = mongoose.model("Video", videoSchema);  // Changed 'Mongoose' to 'mongoose' and fixed schema name
 