const express = require('express');
const db = require('../config/database');
const users = require('../models/users.model');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/signup', async (req,res)=>{
    try {
        const {email,password,name,phoneNumber} = req.body;
        user = await users.findOne({ where: { email: email } });
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
        // const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
        const {email,password} = req.body;
        const user = await users.findOne({ where: { email: email } });
        console.log(user.password);
        if (user.password === null) {
            res.json('Not registered');
        }
        else if(user.password == password){
            res.json('logged in');
        }
        else{
            res.json('wrong password');
        }
        console.log('1');
        // res.json('200',{accessToken : accessToken});
    } catch (error) {
        console.error(error.message);
    }
})
module.exports = router;