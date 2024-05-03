const express = require('express');
const {connectMongoose} = require("./config/database")
const app = express();
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

app.listen(5000, () => {
    console.log("Server are running port 5000");
    connectMongoose()
});

module.exports = app; // Exporting 'app' module
