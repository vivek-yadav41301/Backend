import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullName: {
    type: String,
    require: true,
    index: true,

    trim: true,
  },
  avatar:{
    type:String,// url of cloudnary
    require:true
  },
 coverImage:{
    type:String,// url of cloudnary
    require:true
  },
  watchHistory:[
    {
        type:mongoose.type.Schema.ObjectId,
        ref:"Video"

    }
]
,
password:{
    type:String,
    require:[true,"Password is required"]
}
,
refreshToken:{
    type:String

}
    


},{timestamps:true});

userSchema.pre("save",async function(next){
  if(this.isModified("password"))return next;
  this.password=bcrypt.hast(this.password,10)
  next()
})

userSchema.methods.isPasswordCorrect=async function (password) {
  return await bcrypt.compare(password,this.password)
  
}
userSchema.methods.generateAccessToken=function()
{
  jwt.sign({
    _id:this._id,
    username:this.username,
    fullName:this.fullName,
    email:this.email

  },process.env.ACCESS_TOKEN_SECRET,{expireIn:process.env.ACCESS_TOKEN_EXPIRY})
}

userSchema.methods.generateRefreshToken=function()
{
  jwt.sign({
    _id:this._id,
    // username:this.username,
    // fullName:this.fullName,
    // email:this.email

  },process.env.REFRESH_TOKEN_SECRET,{expireIn:process.env.REFRESH_TOKEN_EXPIRY})
}

export const User = mongoose.model("User", userSchema);
  

