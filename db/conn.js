import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({path: "./config.env"})


const mongoURI = process.env.DATABASE

const connectDB =()=>{
   return mongoose.connect(mongoURI, ()=>{
        console.log("Connection Succesfull");
    })
}

export default connectDB