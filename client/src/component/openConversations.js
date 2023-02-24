import axios from 'axios';
import { ListGroup} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import imageUrl from '../image/img.png';

export default function OpenConversations({receiver}) {
  const [messages,setMessages] = useState([]);
  const [text, setText] = useState('')
  const [bgcolor,setBgcolor] = useState('rgb(40,40,40)')

  const handleSubmit = async(event)=>{
    event.preventDefault();
    try {
      getMessage();
      axios.post(`http://localhost:5000/messages`,{
        message : text,
        senderId : localStorage.getItem('pernToken'),
        receiverId : receiver.email
      });
      setText('');
    } catch (error) {
      console.log(error);
    }
  }
  const getMessage= async()=>{
    try {
      const email = localStorage.getItem('pernToken');
      console.log(email,receiver.email);
      await axios.post('http://localhost:5000/getMessage',{
        senderId : email,
        receiverId : receiver.email
      }).then((response) => setMessages(...messages,response.data));
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(()=>{    
    // getMessage()
    
    console.log(messages);
  },[receiver,messages])

  return (
    <div style={{width:'70%',height:'100vh' ,backgroundImage: `url(${imageUrl})`,backgroundSize:'55%',float:"left" ,backgroundColor:"rgb(40,40,40)",  color:'white' }}>
          <div style={{border:'0px',backgroundColor:'rgb(40,40,40)',height:'10vh',
          color:'white'}}>&emsp;Messages <br></br><br></br>&emsp;{receiver.name}</div>
          <br></br>
        <div >
           <ListGroup variant='flush' style={{height:'70vh'}} >
            {messages.map((item,index) => (
            <ListGroup.Item key={index} style={{backgroundColor:'rgb(5,70,64)',color:'white',border:'0px'}}>
                {item.message}
            </ListGroup.Item>
            ))}
            </ListGroup>
        </div>
        <Form onSubmit={handleSubmit} style={{width:'100%',height:'20vh'}}>
        <Form.Group >
          <InputGroup >
            <Form.Control
              as="textarea"
              required
              placeholder='Type a message'
              value={text}
              onChange={e => setText(e.target.value)}
              style={{border:'0px',borderRadius:'0px', marginTop:'28px' ,
              resize: 'none',backgroundColor:'rgb(40,40,40)',color:'white' }}
            />
            <Button type="submit" onMouseEnter={()=>setBgcolor('rgb(56,56,56)')} 
            onMouseLeave={()=>setBgcolor('rgb(40,40,40)')} style={{border:'none',backgroundColor:bgcolor,boxShadow :'none'}} >--{'>'}</Button>
          </InputGroup>
        </Form.Group>
      </Form>
  </div>
  )
}
