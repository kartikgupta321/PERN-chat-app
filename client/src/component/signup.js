import React from 'react';
import "./login.css";
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    const navigate = useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        try {
            axios.post(`http://localhost:5000/signup`,{
                name:name,
                email:email,
                password:password,
                phoneNumber:phoneNumber
            });
            alert("User registered");
            navigate('/');
        } catch (error) {
            alert(error);
        }
    }
  return (
    <div className='login' style={{margin:'5% 33% 5% 33%'}}>
                <h4 style={{margin:'8% 33% 5% 40%'}}>Signup</h4>
                <form onSubmit={handleSubmit}>
                    <div style={{margin:'8% 33% 8% 11%'}} className='text_area'>
                        <input
                            type='text'
                            id='username'
                            name = 'username'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            placeholder='name'
                            className = 'text_input'
                        />
                    </div>
                    <div style={{margin:'8% 33% 8% 11%'}} className='text_area'>
                        <input
                            type= 'text'
                            id = 'password'
                            name = 'password'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder = 'email'
                            className = 'text_input'
                        />
                    </div>
                    <div style={{margin:'8% 33% 8% 11%'}} className='text_area'>
                        <input
                            type= 'password'
                            id = 'password'
                            name = 'password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder = 'password'
                            className = 'text_input'
                        />
                    </div>
                    <div style={{margin:'8% 33% 2% 11%'}} className='text_area'>
                        <input
                            type= 'text'
                            id = 'password'
                            name = 'password'
                            value={phoneNumber}
                            onChange={(e)=>setPhonenumber(e.target.value)}
                            placeholder = 'phone number'
                            className = 'text_input'
                        />
                    </div>
                    <div style={{margin:'0% 33% 8% 35%'}} >
                        <input 
                        type= 'submit'
                        value = 'Signup'
                        className="btn"
                        />
                    </div>
                </form>
                <br></br>
                <br></br>
                <br></br>
                <a style={{margin:'0% 33% 5% 44%'}} className='link' href='/login' >Log in</a>
            </div>
  )
}