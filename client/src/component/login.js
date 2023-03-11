import React,{ useState} from 'react';
import "./login.css";
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [User,setUser] = useState(null);

    const handleSubmit= async (event)=>{
        event.preventDefault();
        try {
            if(email===''){
                alert('enter email');
            }
            if(password===''){
                alert('enter password');
            }
            await axios.post(`http://localhost:5000/login`,{
                email:email,
                password:password
            }).then(res => {setUser(res.data);console.log(res.data)})
            localStorage.setItem('pernToken',email);
            window.location = "/";
        } catch (error) {
            alert(error);
        }
    }
  return (
    <div className='login' style={{margin:'5% 33% 5% 33%'}}>
                <h4 style={{margin:'8% 33% 8% 40%'}}>Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className='text_area' style={{margin:'10% 33% 10% 11%'}}>
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
                    <div className='text_area' style={{margin:'10% 33% 10% 11%'}}>
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
                    <div style={{margin:'0% 33% 0% 35%'}}>
                        <input 
                        type= 'submit'
                        value = 'LOGIN'
                        className="btn"
                        />
                    </div>
                </form>
                    <a  className='link' href='/signup' style={{margin:'0% 33% 5% 44%'}} >Sign up</a>
    </div>
  )
}