const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let posts = [];

app.get("/posts",(req,res)=>{
 res.json(posts);
});

app.post("/posts",(req,res)=>{
 posts.push(req.body);
 res.json({message:"Post Added"});
});

app.listen(3000,()=>{
 console.log("Server Running");
});