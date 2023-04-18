const express=require("express");
const cors=require("cors");
var cookieParser = require('cookie-parser')


const connection=require("./Config/db")
const UserRouter=require("./Routes/User.route")
const CourseRouter=require("./Routes/Course.route")


const app=express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"*"
}))




app.use("/signin",UserRouter);
app.use("/course",CourseRouter)


app.listen(7000,async()=>{
 try{
 await connection;
 console.log("server running on port 7000")
 }
 catch{
    console.log("error in server connection")
 }
})