const skillSchema=require('../models/skillModel')
const eduSchema=require('../models/eduModel')
const expSchema=require('../models/expModel')
const aboutSchema=require('../models/aboutModel')
const userSchema=require('../models/userModel')


//skills controllers

exports.AddSkill =async (req,res)=>{
    const {skillTitle,skillItem} =req.body
    const userID=req.headers._id
    try {
        const  data = {skillTitle,skillItem,userID}
        const user = await skillSchema.create(data)
        await userSchema.updateOne({
            _id:userID
        },
            {
                $push: {
                    skills:user
                }
            }

            )
        return  res.status(201).json({status: 'success',data: user})
    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)
    }
}
exports.SkillUpdate =async (req,res) => {
    let skillID=req.body._id
    const userID=req.headers._id
    const {skillTitle,skillItem} =req.body
    const  newData = {skillTitle,skillItem}

    try{
        const user= await skillSchema.updateOne({ _id:skillID},{$set:newData},{upsert:true})
        if(!user){
            return  res.status(404).json({status: 'fail',message: 'Skill ID not found'})
        }
         return  res.status(200).json({status:'updated success',data:user})
    }
    catch (err) {
        console.log(err)
    }
}
exports.skillFind = async (req, res) => {
    let Query ={}
    let Projections={ }
    try {
        const user = await skillSchema.find(Query,Projections)
        if(!user) {
            return res.status(404).json({status: 'fail',message: 'Skill not found'})
        }
        return  res.status(200).json({status:' Success',data: user})

    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)

    }
}

//educations controllers
exports.AddEdu =async (req,res)=>{
    const {Subject,Passing_year,Academy} =req.body
    const userID=req.headers._id
    try {
        const  data = {Subject,Passing_year,Academy,userID}
        const user = await eduSchema.create(data)
        await userSchema.updateOne({
                _id:userID
            },
            {
                $push: {
                    education:user
                }
            }

        )
        return  res.status(201).json({status: 'success',data: user})
    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)
    }
}

exports.eduUpdate =async (req,res) => {
    let eduID=req.body._id
    const {Subject,Passing_year,Academy} =req.body
    const  newData = {Subject,Passing_year,Academy}

    try{
        const user= await eduSchema.updateOne({ _id:eduID},{$set:newData},{upsert:true})
        if(!user){
            return  res.status(404).json({status: 'fail',message: 'edu ID not found'})
        }
        return  res.status(200).json({status:'updated success',data:user})
    }
    catch (err) {
        console.log(err)
    }
}

exports.eduFind = async (req, res) => {
    let Query ={}
    let Projections={ }
    try {
        const user = await eduSchema.find(Query,Projections)
        if(!user) {
            return res.status(404).json({status: 'failed',message: 'Edu not found'})
        }
        return  res.status(200).json({status:' Success',data: user})

    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)

    }
}


//Experience

exports.AddExp =async (req,res)=>{
    const {job_Title,Company,join_Date,quit_Date} =req.body
    const userID=req.headers._id
    try {
        const  data = {job_Title,Company,join_Date,quit_Date,userID}
        const user = await expSchema.create(data)
        await userSchema.updateOne({
                _id:userID
            },
            {
                $push: {
                    experiences:user
                }
            }

        )
        return  res.status(201).json({status: 'success',data: user})
    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)
    }
}

exports.expUpdate =async (req,res) => {
    let eduID=req.body._id
    const {job_Title,Company,join_Date,quit_Date} =req.body
    const  newData = {job_Title,Company,join_Date,quit_Date}

    try{
        const user= await expSchema.updateOne({ _id:eduID},{$set:newData},{upsert:true})
        if(!user){
            return  res.status(404).json({status: 'failed ',message: 'experience ID not found'})
        }
        return  res.status(200).json({status:'update successes',data:user})
    }
    catch (err) {
        console.log(err)
    }
}
exports.expFind = async (req, res) => {
    let Query ={}
    let Projections={ }
    try {
        const user = await expSchema.find(Query,Projections)
        if(!user) {
            return res.status(404).json({status: 'failed',message: 'experience not found'})
        }
        return  res.status(200).json({status:' Success',data: user})

    }
    catch (error) {
        if(error){
            return  res.status(500).json({status: 'error',data:error.message});
        }
        console.log(error)

    }
}