import mongoose from "mongoose";
// import dotenv from 'dotenv'
// dotenv.config()
import { DB_name } from "../constants.js";
console.log("hello:")
const connectDB=async ()=>{
    try{
         const connectionInstance= await mongoose.connect(`${process.env.URL}/${DB_name}`)
         console.log(`\nmongodb connected!!DBHost:${connectionInstance.connection.host}`)
        //  console.log(connectionInstance)

    }
    catch(error)
    {
        console.log("mongoDb connection error",error)
        process.exit(1)
    }
}

// connectDB()
export default connectDB;