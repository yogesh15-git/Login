require('./db/mongodb');
var express=require('express');
var bodyparser=require('body-parser');
var apiroute=require('./route/route');
var app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',apiroute);
app.listen(3000,(err)=>{
    if(err){
        console.log("error in connecting")
    }
    else{
        console.log("app is connected to port 3000")
    }
})