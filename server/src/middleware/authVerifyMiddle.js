const jwt=require('jsonwebtoken')
exports.auth=(req,res,next)=>{
    let token=req.headers["token"]
    const secretKey=process.env.JWT_SECRET
    jwt.verify(token,secretKey,(err,decoded)=>{
        if(err){
            res.status(404).json({status:"Unauthorized",data:err})
        }
        else {
            // console.log(decoded)
            let email=decoded['email']
            let id=decoded['id']
            console.log(id)
            req.headers.email=email
            req.headers._id=id
            next()
        }
    })
}