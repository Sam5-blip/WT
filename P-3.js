const fs = require("fs")
const express = require('express');

const app = express()

app.get("/",(req,res)=>{
    res.write(fs.readFileSync("Home.txt","utf-8"))
    res.send();

})
app.get("/About",(req,res)=>{
    res.write(fs.readFileSync("About.txt","utf-8"))
    res.send();

})

app.get("/Contact",(req,res)=>{
    res.write(fs.readFileSync("Contact.txt","utf-8"))
    res.send();

})

app.get("/Category",(req,res)=>{
    res.write(fs.readFileSync("Category.txt","utf-8"))
    res.send();

})

app.listen(3000,()=>{
    console.log("server stared");
 })

 