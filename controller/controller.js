require('../db/model');
var mongoose=require('mongoose');
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');
var user=mongoose.model('user');

module.exports.signup=function(req,res,next){
    var newuser=user();
    newuser.username=req.body.username;
    newuser.password=req.body.password;
    
    newuser.save((err,doc)=>{
        if(err){
            console.log("error in saving data to mongodb")
        }
        else{
            return res.send(doc);
        }
        
    })
}

module.exports.login=function(req,res,next){
    user.findOne({username:req.body.username},(err,user)=>
    {
        if(err)
                    console.log(err);
                    if(user==null)
                    {
                        return res.json("user not exists");
                    }
                    if(user)
                    {
                        console.log(req.body.password);
                        console.log(user.password); 
                    }
        

         var match=bcrypt.compareSync(req.body.password,user.password);
        if(match){
            console.log("match")
            return res.json({"token":jwt.sign({_id:user._id},"ABC123",{expiresIn:"10m"})})
        }
    })
}

// module.exports.login=function(req,res,next)
// {
//     user.findOne({email:req.body.email},
//         (err,user)=>
//         {
//             if(err)
//             console.log(err);
//             if(user==null)
//             {
//                 return res.json("user not exists");
//             }
//             if(user)
//             {
//                 console.log(req.body.password);
//                 console.log(user.password); 
//             }



// var match=bcrypt.compareSync(req.body.password,user.password);
// console.log(match);

// if(match)
// {
//     console.log("password is matched");
//     return res.json({"token":jwt.sign({_id:user._id},"ABC111",{expiresIn:"30m"})});
    
// }
// else
// {
// console.log("password not matched");
// return res.json({status:false,data:null,message:'password not correct'});
// }
// }

// );
//  }