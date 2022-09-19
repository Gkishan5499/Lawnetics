const express = require('express');
const {Message} = require('../models/message');
const nodemailer= require('nodemailer');
const router = express.Router();
const creds= require("../credentials.json");

let transporter= nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:creds.auth.user,
        pass:creds.auth.pass
    }
})


router.post('/', (req, res)=>{
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject:req.body.subject,
        message: req.body.message,
    })
 message.save()
 .then(result=>{
    console.log(result);
 }).catch(err=>{
     console.log(err);
     res.status(500).json({message:"message is not sending ", error:err});
 })
 res.status(200).json({message:"message has been sent", contact:message});
  
 const mailOption={
     from:message.name,
     to :message.email,
     subject: message.subject,
     html:`<h1>Welcome to Lawnetics</h1><hr><p>With one Click , you've open the door to the India's most 
      Welcoming LawFirm.</p><br/> 
     
      ${message.name} <br/> 
      
      <h3>${message.subject}</h3>
      <hr>
     <noreply@${message.name}.com> <br/><br>
     ${message.message} <hr/><br>

     <p>Thank you for Contact us </p> <br>
      Regards <br>
      CEO & Operatives<br>
      <span>${'lawnetics@gmail.com'}</spane>
      <br/>
      <spane>${'www.lawnetics.com'}
    `

 }
 transporter.sendMail(mailOption, (err,data)=>{
     if(err){
         res.json({
             status:err
         })
         console.log(err);
     }
     else{
         res.json({
             status:"success"
         })
         console.log("email sent"+data.response)
     }
 })

})
transporter.verify((err,success)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server is ready to take the mail");
    }
})


router.get('/', async (req, res) => {
    let messages = await Message.find();
    if(!messages){
        return res.status(404).send("Message not found");
    }
    res.send(messages);
})

router.delete('/:id', (req, res) => {
    Message.findByIdAndRemove(req.params.id, (err, message) => {
        if(err) {
           return res.status(400).json({success: false, message: err});
        }
        if(message) {
            return res.status(200).json({success: true, message: message});
        }
    })
})


module.exports = router;