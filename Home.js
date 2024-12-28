 const { log } = require('console');
const express = require('express');

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello world")

})

app.get("/Home",(req,res)=>{
    res.send("Home page")

})
app.get("/About",(req,res)=>{
    res.send("About page")

})

app.get("/Contact",(req,res)=>{
    res.send("contact page")

})

app.get("/Category",(req,res)=>{
    res.send("Category page")

})

app.listen(3000,()=>{
    console.log("server stared");
 })