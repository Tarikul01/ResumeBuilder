const UserSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
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
        await res.status(200).json({status:'success',data: user})
        console.log(user)

    }
    catch (error) {
        console.log(error)
    }
}