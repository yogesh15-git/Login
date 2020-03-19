var controller=require('../controller/controller');
var express=require('express');
var router=express.Router();
router.post('/signup',controller.signup);
router.post('/login',controller.login);
module.exports=router