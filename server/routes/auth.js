
const router = require("express").Router()

const { check, validationResult } = require("express-validator")

const bcrypt = require("bcrypt")

const JWT = require("jsonwebtoken")
const User = require("../modules/Users.Module")

require("dotenv").config()

router.post(
    "/signup",
    [
        check("email", "invalid email").isEmail(),
        check("password", "password must be at least 6 chars long").isLength({ min: 6 })
    ],
    async (req, res) => {
        console.log(1);
        const { email, password } = req.body

        const errors = validationResult(req)
        if (!errors.isEmpty())
            return res.status(400).json({
                errors: errors.array()
            })

        let user = await User.findOne({ email: email }) // Use findOne instead of find

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
            password: hashedPassword
        })

        const accessToken = await JWT.sign(
            { email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "5m" }
        )
        res.json({
            accessToken
        })
    }
)



//get all users
router.get("/users", (req, res) => {
    res.json(User)
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    console.log(email);

    let user = await User.findOne({ email: email }) // Use findOne instead of find
    if (!user) {
        return res.status(400).json({
            errors: [
                {
                    msg: " Invalid credentials"
                }
            ]
        })
    }
    let isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({
            errors:[ 
                {
                msg:"Email or password is invalid"
                }
            ]
        })
    }

    const accessToken = await JWT.sign(
        { email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30s" }
    )
    res.json({
        accessToken,
    })
})


module.exports = router