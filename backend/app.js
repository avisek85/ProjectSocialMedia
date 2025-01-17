const express = require("express")
const app=express();
const cookieParser= require("cookie-parser")
const cors = require("cors");

if(process.env.NODE_ENV !=="production"){
require("dotenv").config({path:"backend/config/config.env"});
}

//using middlewares
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use(cookieParser())


//Importing Routes
const post=require("./routes/post");
const user=require("./routes/user");

//using Routes
app.use("/api/v1",post);
app.use("/api/v1",user);



module.exports = app;