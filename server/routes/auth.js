
const router = require("express").Router()

const { check, validationResult } = require("express-validator")


const authController = require("../controller/auth.controller")
const { signUp, allUsers, login } = authController
require("dotenv").config()

router.post(
    "/signup",
    [
        check("email", "invalid email").isEmail(),
        check("password", "password must be at least 6 chars long").isLength({ min: 6 })
    ],
    signUp
)



//get all users
router.get("/users", allUsers)

router.post("/login", login)


module.exports = router