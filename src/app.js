import express from "express";
import cors from "cors"
//  import userRouter from './routes/user.routes'


import cookieParser from "cookie-parser";

const app=express()


app.use(cors({
    origin: ProcessingInstruction.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"20kb"}))

app.use(express.urlencoded({extended:true,limit:"20kb"}))

app.use(express.static("public"))

app.use(cookieParser())

 import userRouter from './routes/user.routes.js'


// routes import 
app.use("/api/v1/users/",userRouter);

//http://localhost:8000/users/register
// routes declarati on 

export {app};