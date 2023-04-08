const mongoose =require("mongoose")

const aboutSchema = new mongoose.Schema({
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
    }

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("about",aboutSchema)

