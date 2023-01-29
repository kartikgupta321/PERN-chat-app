import React, {Component} from 'react';
import "./login.css";
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit= async (event)=>{
        event.preventDefault();
        try {
            axios.post(`http://localhost:5000/login`,{
                email:email,
                password:password
            });
            localStorage.setItem('pernToken',email);
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    }
  return (
    <div className='login' >
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className='text_area'>
                        <input
                            type='text'
                            id='username'
                            name = 'username'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='email'
                            className = 'text_input'
                        />
                    </div>
                    <div className='text_area'>
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
                    <div>
                        <input
                        type= 'submit'
                        value = 'LOGIN'
                        className="btn"
                        />
                    </div>
                </form>
                    <a className='link' href='/signup' >Sign up</a>
    </div>
  )
}