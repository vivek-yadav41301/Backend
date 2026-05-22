import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema(
  {
    videoFile: {
      type: String,//cloudnery
      require: true,
    },
    thumbnail: { type: String, require: true },//cloudnery
    title:{ type: String, require: true },
    description:{ type: String, require: true },
    duration:{type:Number},
    views:{
        type:Number,
        default:0
    }
    ,
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }


  },


  { timestamps: true }
  
);
videoSchema.plugin(mongooseAggreagatePaginate)
export const Video = mongoose.model("Videos", videoSchema);
