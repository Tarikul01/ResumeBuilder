const UserSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const nodeMailer = require('nodemailer')
const random=require('randomstring')
require('dotenv').config();

//Node Mailer
const userResetPassService= async (name,email ,token,req,res) => {
    try {
        let testAccount = await nodeMailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            // requireTLS: true,
            auth: {
                user: process.env.emailUser,
                pass: process.env.emailPassword
            },
        });
        let sentOptions = {
            from: process.env.emailUser,
            to: email,
            subject: "reset password",
            html: `Hi ${name} . This is your reset password link <a href="https://localhost:9000/api/v1/reset-password?token=${token}">"https://localhost:9000/api/v1/reset-password?token=${token}" </a> click here to reset your password or copy and paste`
        };
       return  transporter.sendMail(sentOptions,(error,info)=>{
            if (error){
                console.log(error);
            }
            else{
                console.log("mail sent successfully"+info.response);
            }
        })
    }
    catch (error) {
       return res.status(400).json({status: 'error',error: error.message});
    }
}

//user resisters

exports.Signup= async (req,res)=>{
    const {firstName,lastName,email,password,mobile} =req.body
    try {
        let hashPass = await bcrypt.hash(password,10)
        const  data = {firstName,lastName,email,password:hashPass,mobile}
        const user = await UserSchema.create(data)
        return  res.status(201).json({status: 'success',data: user})
    }
    catch (error) {
        if(error){
          return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)
    }
}

//user singing

exports.Signin= async (req,res)=>{
    const data =req.body
    try {
        const user = await UserSchema.findOne({email:data.email})
        if(!user){
            return res.status(404).json({status: 'fail',message: 'User not found'})
        }
        const isMatch = await bcrypt.compare(data.password,user.password)
        if(!isMatch){
            return res.status(404).json({status: 'fail',message: 'Password is incorrect'})
        }
        const token = await jwt.sign({id:user._id,email: user.email},process.env.JWT_SECRET,{expiresIn:'24h'})
        await res.status(200).json({status:'Login Success',token:token})

    }
    catch (error) {
        console.log(error)
    }
}

//find users

exports.findUser = async (req, res) => {
    let Query ={}
    let Projections={ password: 0 }
    try {
        const user = await UserSchema.find(Query,Projections).populate("skills","skillTitle skillItem").populate("education","Subject Passing_year Academy")
        if(!user){
            return res.status(404).json({status: 'fail',message: 'User not found'})
        }
        await res.status(200).json({status:' Success',data: user})

    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)

    }
}

//update user
exports.Update =async (req,res) => {
    let email=req.headers.email
    console.log("email"+email)
    const {firstName,lastName,password,mobile} =req.body
    let hashPass = await bcrypt.hash(password,10)
    const  newData = {firstName,lastName,email,password:hashPass,mobile}

    try{
        const user= await UserSchema.updateOne({ email:email},{$set:newData},{upsert:true})
        if(!user){
            return  res.status(404).json({status: 'fail',message: 'User not found'})
        }
       return  res.status(200).json({status:'updated success',data:user})
    }
    catch (err) {
        console.log(err)
    }
}

//forget password

exports.forgetPassword = async (req,res)=>{
    let email =req.body.email
    try {
        const userData= await UserSchema.findOne({ email})
        if (userData){
            const randomString=random.generate()
            console.log(randomString)
            const data = await UserSchema.updateOne({ email:email},{$set:{token:randomString}},{upsert:true})
            let name=userData.firstName
            await userResetPassService(name,email,randomString)
            return res.status(200).json({"status":"success",message:"please check your email"})

        }
        else {
           return  res.status(404).json({message:"user not found"})
        }
    }
    catch(error) {
           return  res.status(400).json({message:"error: " + error})
    }
}

exports.resetPassword =async (req,res)=>{
    try {
        const token=req.query.token
        const tokenData= await UserSchema.findOne({token:token})
        if (tokenData){
            const password=req.body.password
            const hashPass = await bcrypt.hash(password,10)
            const data =await UserSchema.findByIdAndUpdate({_id:tokenData._id},{$set:{password:hashPass,token:""}},{new:true})
            return res.status(200).json({status:"Password Reset Successes",data:data})
        }
        else{
          return  res.status(404).json({"status":"Failed","message":"token expired"})
        }
    }
    catch (error) {
       return  res.status(400).json({"status":"something went wrong","message":error})
    }
}