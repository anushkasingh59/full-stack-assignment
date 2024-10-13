const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://root:root@172.18.0.2:27017/?authSource=admin")
    .then(() =>{
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.log("Error trying to connect MongoDB :",e);
    })



app.get("/",(req,res) => {
    res.send("<h1>Hello World using express </h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})