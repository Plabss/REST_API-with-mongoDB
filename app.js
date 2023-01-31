const express=require('express');
const cors=require('cors');
require("./config/db");

const userRouter=require("./routes/user.route")

const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/./views/index.html')
})

//user router
app.use('/api/users',userRouter);


//invalid route error handling
app.use((req,res,next)=>{
    res.status(404).json({
        message:"route not found!"
    })
})

//server error handling
app.use((error,req,res,next)=>{
    res.status(404).json({
        message:"something is broken"
    })
})

module.exports=app;