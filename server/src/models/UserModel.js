const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName :{
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        trim:true
    },
    password : {
        type:String,
        required:true,
        trim:true
    },
    mobile:Number,
    role:{
        type:String,
        required:true,
        default:"user"
    },
    status:{
        type:String,
        required:true,
        default:"free"
    },

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("User",userSchema)