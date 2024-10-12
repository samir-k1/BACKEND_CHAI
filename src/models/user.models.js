import mongoose, { Schema } from "mongoose";  // Correctly importing mongoose and Schema
import jwt from "jsonwebtoken"

import bcrypt from "bcrypt"
const userSchema = new Schema({  // Corrected to userSchema
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true  // Fixed typo from 'inde' to 'index'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,  // Cloudinary URL for avatar image
        required: true,
    },
    coverImage: {
        type: String  // Optional cover image
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"  // Refers to Video model
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String  // Optional refresh token for authentication
    }

    
},{
    timestamps:true
}
)

userSchema.pre("save",async function (next) {
    if (!this.isModified("Password"))return next(); {
       this.password=bcrypt.hash(this.password,10)
       next() 
    }
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

 

export const User = mongoose.model("User", userSchema);  // Changed 'Mongoose' to 'mongoose' and fixed schema name
 