var mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/logindata")
.then(()=>{
    console.log("connected to mongodb")
})
.catch((err)=>{
    console.log("error in connecting to mongodb",+err)
})