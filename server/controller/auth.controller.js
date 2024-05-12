
const router = require("express").Router()

const { check, validationResult } = require("express-validator")

const bcrypt = require("bcrypt")

const JWT = require("jsonwebtoken")
const User = require("../modules/Users.Module")

require("dotenv").config()


//Sign up
const signUp = async (req, res) => {
    console.log(1);
    const { email, password, adminStatus } = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty())
        return res.status(400).json({
            errors: errors.array()
        })

    let user = await User.findOne({ email: email })

    if (user) {
        return res.status(200).json({
            errors: [
                {
                    email: user.email,
                    msg: "The user already exists"
                }
            ]
        })
    }
    const salt = await bcrypt.genSalt(10)
    console.log("Salt:", salt);
    const hashedPassword = await bcrypt.hash(password, salt)

    console.log("hashed password:", hashedPassword);
    await User.create({
        email,
        password: hashedPassword,
        adminStatus,
    })

    const accessToken = await JWT.sign(
        { email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "5s" }
    )
    res.json({
        accessToken
    })
}




const allUsers = (req,res)=>{
    res.json(User)
}

const login = async(req,res)=>{

    const { email, password } = req.body
    console.log(email);

    let user = await User.findOne({ email: email }) 
    if (!user) {
        return res.status(400).json({
            errors: [
                {
                    msg: " Invalid credentials"
                }
            ]
        })
    }
    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(401).json({
            errors: [
                {
                    msg: "Email or password is invalid"
                }
            ]
        })
    }

    const accessToken = await JWT.sign(
        { email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
    )
    res.json({
        accessToken,
    })
}



const authController = {
    signUp,
    allUsers,
    login
}

module.exports = authController