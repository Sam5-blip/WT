const { log } = require('console');
const express = require('express');

const app = express()

app.get("/student",(req,res)=>{
    res.send("Hello world")

})

app.post("/student",(req,res)=>{
    res.send("Hello world")
})

app.listen(3000,()=>{
    console.log("server stared");
 })



