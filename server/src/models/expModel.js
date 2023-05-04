
const mongoose =require("mongoose")

const expSchema = new mongoose.Schema({
    job_Title:{
        type:String,
        required:true
    },
    Company :{
        type:String,
        required:true
    },
    join_Date : {
        type:Date,
        required:true,

    },
    quit_Date:{
        type:Date,
        required:true
    },
    userID:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("exp",expSchema)
