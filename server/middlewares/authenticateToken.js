const JWT = require("jsonwebtoken")
require("dotenv").config()


const authToken = async (req,res,next)=>{

    const token = req.header("x-auth-token")
    if (!token){
        res.status(401).json({
            errors:[{
                msg:"Token not found"
            }
            ]
        })
    }
    
    try{
        const user = await JWT.verify(token,process.env.ACCESS_TOKEN_SECRET)
        req.user = user.email
    
        next()
    }
    catch(err){
        res.status(403).json({
            errors:[{
                msg:"invalid token"
            }]
        })
    
    }
}

module.exports = authToken