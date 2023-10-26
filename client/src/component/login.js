import React, { useState } from 'react';
import "./login.css";
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { backendPath } from '../config/config';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (email === '') {
                alert('enter email')
            }
            if (password === '') {
                alert('enter password');
            }
            const res = await axios.post(`${backendPath}/login`, {
                email: email,
                password: password
            })
            if (res.data === 'logged in') {
                localStorage.setItem('pernToken', email);
                window.location = "/";
            }
            else { alert('invalid credentials'); }

        } catch (error) {
            alert(error);
        }
    }
    return (
        <div className='login' style={{ margin: '5% 33% 5% 33%' }}>
            <h4 style={{ margin: '8% 33% 8% 40%' }}>Login</h4>
            <form onSubmit={handleSubmit}>
                <div className='text_area' style={{ margin: '10% 33% 10% 11%' }}>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email'
                        className='text_input'
                    />
                </div>
                <div className='text_area' style={{ margin: '10% 33% 10% 11%' }}>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                        className='text_input'
                    />
                </div>
                <div style={{ margin: '0% 33% 0% 35%' }}>
                    <input
                        type='submit'
                        value='LOGIN'
                        className="btn"
                    />
                </div>
            </form>
            <div className='googleOauth' style={{position:'static',left:'500px',color:'red',margin:'5px 5px 20px 90px'}}>
                <GoogleOAuthProvider clientId="199664214729-j9ce7hfe2420582hpap9onvduk9vmh59.apps.googleusercontent.com">
                    <GoogleLogin 
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse.credential);
                            axios.post(`${backendPath}/google`, { credential: credentialResponse })
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </div>
            <a className='link' href='/signup' style={{ margin: '0% 33% 5% 44%' }} >Sign up</a>
        </div>
    )
}