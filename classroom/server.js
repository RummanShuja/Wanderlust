const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    res.send("hi, i m root");
})

app.listen(4000, ()=>{
    console.log("server is listening");
})