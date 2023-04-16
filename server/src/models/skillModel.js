const mongoose =require("mongoose")

const skillSchema = new mongoose.Schema({
    skillTitle:{
        type:String,
        required:true
    },
    skillItem:{
        type:String,
        required:true
    }


},{timestamps:true,versionKey:false})

module.exports = mongoose.model("skill",skillSchema)
