const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
dotenv.config();
const app = express();
const port = 3000 || process.env.PORT;
const username = process.env.USERNAME;
const pwd = process.env.PASSWORD;
app.get('/login',(req,res)=>{
    res.json({username,pwd});
})

app.get("/users",(req,res)=>{
    const filepath = path.join(__dirname,'data','users.json');
    fs.readFile(filepath,'utf-8',(err,data)=>{
        if(err){
            res.status(500).json({error:'Failed to read'});
            return;
        }
        const users = JSON.parse(data);
        res.json(users);
    })
})
app.listen(port,()=>{
    console.log(`Running server : http://localhost:${port}`);
})
