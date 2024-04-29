const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")
app.use(express.json())
const Posts = [
    { username: "Alexander", title: "post1" },
    { username: "Sovi", title: "post2" },
    { username: "Olsson", title: "post3" },

]

const users = []
app.get("/users", (req, res) => {
    res.json(users)
})

app.post("/users", async(req, res) => {

    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)



        const user = { name: req.body.name, password: hashPassword }
        users.push(user)
        res.status(201).send(users)
    }
    catch (err) {
        res.status(500).send()
        console.log(err);
    }

})

app.post("/users/login", async(req,res)=>{
    const user = users.find(user => user.name == req.body.name)
    if(user == null){
        return res.send(400).send("Cannot find user")
    }

    try{
        if(await bcrypt.compare(req.body.password, user.password)) {
            console.log(user.name);
            console.log(req.body.name);

            console.log("Bravo success");
        }
        else{
            console.log("Not Allowed");

        }
    }
    catch(err){
        res.status(500).send("NO!!!")
    }
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
})

//