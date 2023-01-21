import React, {Component} from 'react';
import "./login.css";
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='login'>
                <h4>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className='text_area'>
                        <input
                            type='text'
                            id='username'
                            name = 'username'
                            placeholder='email'
                            className = 'text_input'
                        />
                    </div>
                    <div className='text_area'>
                        <input
                            type= 'password'
                            id = 'password'
                            name = 'password'
                            placeholder = 'password'
                            className = 'text_input'
                        />
                    </div>
                    <div>
                        <button
                        type= "submit"
                        value = 'LOGIN'
                        className="btn"
                        />
                    </div>
                </form>
                    <a className='link' href='/signup'>Sign up</a>
            </div>
  )
}