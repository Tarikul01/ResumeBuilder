const mongoose =require("mongoose")

const skillSchema = new mongoose.Schema({
    skillTitle:{
        type:String,
        required:true
    },
    skillItem:{
        type:String,
        required:true
    },
    userID:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }


},{timestamps:true,versionKey:false})

module.exports = mongoose.model("skill",skillSchema)
