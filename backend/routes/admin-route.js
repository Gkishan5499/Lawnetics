const express= require('express');
const { Admin } = require('../models/admin');
const adminrouter= express.Router();

adminrouter.post('/signup',(req,res,next)=>{
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password
        
    })
 admin.save()
 .then(result=>{
    console.log(result);
 }).catch(err=>{
     console.log(err);
     res.status(500).json({message:"Signup is not completed ", error:err});
 })
 res.status(200).json({message:"Signup has been success"});
  
});

module.exports=adminrouter;