var mongoose=require('mongoose');
var bcrypt=require('bcrypt');

var userschema=mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    saltsecret:String
})

userschema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.saltsecret=salt;
            this.password=hash;
            next();

        })
    })
})
mongoose.model('user',userschema);