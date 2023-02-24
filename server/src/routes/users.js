const express = require('express');
const users = require('../models/users.model');
const messages = require('../models/messages.model');
var router = express.Router();

router.post('/signup', async (req,res)=>{
    try {
        const {email,password,name,phoneNumber} = req.body;
        let user = await users.findOne({ where: { email: email } });
        if(user != null){
            res.json('email must be unique')
        }
        else {
            user = await users.findOne({ where: { phoneNumber: phoneNumber } });
            if(user != null){
                res.json('phoneNumber must be unique')
            }
            else{users.create({
                name: name,
                email: email,
                password : password,
                phoneNumber : phoneNumber
            });
        res.json("User Registered");
            }
        }
    } catch (error) {
        console.error(error.message);
    }
})
router.post('/login', async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await users.findOne({ where: { email: email } });
        if (user === null) {
            res.json('Not registered');
        }
        else if(user.password == password){
            res.json(user.id);
        }
        else{
            res.json('wrong password');
        }
    } catch (error) {
        console.error(error.message);
    }
})
router.get('/contacts',async (req,res)=>{
    let contacts
    try {
        const {email,name} = req.body;
        contacts = await users.findAll({
            // attributes: ['name'],
            where: {

            }
          });
    } catch (error) {
        console.log(error.message);
    }
    res.send(JSON.stringify(contacts));
})
router.post('/messages', async (req,res)=>{
    try {
        const {message,senderId,receiverId} = req.body;
        response = await messages.create({
            message: message,
            senderId: senderId,
            receiverId : receiverId,
        })
        res.json('message sent')
    } catch (error) {
        console.log(error.message);
    }
})
router.post('/getMessage',async (req,res)=>{
    try {
        const {senderId,receiverId} = req.body;
        const message = await messages.findAll({
            attributes :['message'],
            where: {
                senderId : senderId,
                receiverId : receiverId
              }
          });
        res.send(JSON.stringify(message));
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = router;