import express from "express";
import add from "./add.js";
const app=express();

app.listen(8080,()=>{
    console.log("listening on port 8080");
})

app.get("/getSum/:a/:b",(req,res)=>{
    const {a,b}=req.params;
    res.json({sum:add(parseInt(a),parseInt(b))})
})