const mongoose =require("mongoose")

const aboutModel = new mongoose.Schema({
    Present_add:{
        type:String,
        required:true
    },
    Permanent_add :{
        type:String,
        required:true
    },
    about_Me : {
        type:String,
        required:true,
        trim:true
    },
    userID:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("about",aboutModel)

