import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credential:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// Form data looks like
// name=Vivek&age=20 when send 
// req.body = {  after use urlendocde  it look like object
//    name:"Vivek",
//    age:"20"
// }
app.use(express.static("Public"))

export default app