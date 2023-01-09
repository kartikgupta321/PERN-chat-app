const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); //req.body

// ROUTES

// Login
app.post("/login", async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const login = await pool.query(
            "Select Password,user_id FROM usertable WHERE email = $1",[email]
        );
        console.log(login.rows[0]);
        console.log(email);
        if(login.rows[0].password==password){
            console.log('logged in');
        };
        res.json(login.rows[0].user_id);
    } catch (err) {
        console.log(err.message);
    }

})
app.post("/signup", async(req,res)=>{
    try {
        const name = req.body.name;
        const phone_no = req.body.phone_no;
        const email = req.body.email;
        const password = req.body.password;
        console.log(name,phone_no,email,password);
        const signup =await pool.query(
        "INSERT into UserTable (name,Email,Password,Phone_No) values($1,$2,$3,$4)",[name,phone_no,email,password]
        );
        console.log('user inserted');
        setTimeout(5);
        const id = await pool.query(
            "select user_id FROM usertable WHERE email = $1",[email]
        );
        res.json(id.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})




app.listen(5000,()=>{
    console.log("server has started on port 5000");
});