const express = require("express");
const app = express();
const port = 3000;
app.use(express.urlencoded({extended: true}));

app.get("/register",(req,res)=>{
    let {username,password}=req.query; 
    res.send(`Standard GET res and welllcome user-${username}`);
});

app.post("/register",(req,res)=>{
    let {username,password}=req.body;
    res.send(`Standard POST res and welcome user-${username}`);
});

app.listen(port,()=>{
    console.log("The server is working absolutely fine @programmer !!");
});