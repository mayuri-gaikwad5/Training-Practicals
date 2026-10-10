const express = require('express')
const jwt = require("jsonwebtoken")

const app = express()

app.get("/api",(req,res)=>{
    res.json({
        message:"Hey Welcome to this API service",
    });
})

app.post("/api/post",verifyToken,(req,res)=>{
    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                message:"Post Created...",
                authData
            })
        }
    })
    res.json({
        message:"Post created"
    })
})

app.post("/api/login",(req,res)=>{
    const user={
        id:1,
        name:"Mayuri",
        email:"mayurigaikwad@gmail.com"
    }

    jwt.sign({ user:user }, 'secretkey' ,(err,token)=>{
        res.json(
            token,
        )
    })
})

function verifyToken(req,res,next){
    const bearerheader = req.headers['authorization']
    if (bearerheader !== "undefined"){
        const bearerToken = bearerheader.split(' ')[1]
        req.token = bearerToken
        return next()
    }
    else{
        res.sendStatus(403) // forbidden
    }
}

app.listen(3000,(res,req)=>{
    console.log("server started on port 3000")
})