import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"
dotenv.config()
console.log("page 1")
connectDB().then(()=>{
         app.listen(process.env.PORT||8000,()=>{console.log(`http://localhost:${process.env.PORT}`)})
}).catch((error)=>{
    console.log("mongo db connection failed!!!",err)
})

// async function connectDB() {!!
//   try {
//     await mongoose.connect(`${process.env.URL}/${DB_name}`);
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// connectDB();


