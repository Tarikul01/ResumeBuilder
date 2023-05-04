const mongoose =require("mongoose")

const eduSchema = new mongoose.Schema({
    Subject:{
        type:String,
        required:true
    },
    Passing_year :{
        type:String,
        required:true
    },
    Academy : {
        type:String,
        required:true,
        trim:true
    },
    userID:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("edu",eduSchema)

