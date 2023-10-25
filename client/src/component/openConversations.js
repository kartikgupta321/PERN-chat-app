import axios from 'axios';
import { ListGroup } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import imageUrl from '../image/img.png';
import { io } from "socket.io-client";
const moment = require('moment');

const socket = io("http://localhost:5001");

export default function OpenConversations({ receiver, setReceiver }) {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('')
    const [bgcolor, setBgcolor] = useState('rgb(40,40,40)')

    socket.on('receive-msg', message => {
        // setText('');
        getMessage();
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:5000/messages`, {
                message: text,
                senderId: localStorage.getItem('pernToken'),
                receiverId: receiver.email
            });
            socket.emit('send-message', text)
            setText('');
            getMessage();
        } catch (error) {
            console.log(error);
        }
    }
    const getMessage = async () => {
        try {
            const email = localStorage.getItem('pernToken');
            // await axios.post('http://localhost:5000/getMessage',{
            //   senderId : email,
            //   receiverId : receiver.email
            // }).then((response) => setMessages(...messages,response.data));
            const msg = await axios.post('http://localhost:5000/getMessage', {
                senderId: email,
                receiverId: receiver.email
            });
            setMessages(msg.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getMessage();
    }, [receiver, setMessages])
    if (receiver.length === 0) {
        return (
            <div style={{ position: 'fixed', right: '0px', width: '70%', height: '100vh', backgroundImage: `url(${imageUrl})`, backgroundSize: '55%', float: "left", backgroundColor: "rgb(40,40,40)", color: 'white' }}>
                <div style={{ border: '0px', height: '10%', backgroundColor: 'rgb(40,40,40)', padding: '15px 15px 25px 15px', color: 'white', fontSize: 'large' }}>{receiver.name}</div>
                <div style={{ maxHeight: '620px', overflow: 'auto', display: 'flex', flexDirection: 'column-reverse' }}>
                    {/* <div className="d-flex justify-content-center" > */}
                    <ListGroup >
                        {(messages && messages.length > 0) && messages.map((item, index) => (
                            <ListGroup.Item className={`${receiver.email === item.receiverId ? 'align-self-end ' : ' align-self-start'}`} key={index} style={{ overflowWrap: 'break-word', maxWidth: '70%', width: 'auto', margin: '5px 5px 5px 5px', backgroundColor: 'rgb(5,70,64)', color: 'white', borderRadius: '5px', padding: '15px 15px 15px 15px' }}>
                                {item.message}
                                <br></br>
                                <sub style={{ padding: '10px 0px 5px 0px', fontSize: 'x-small', opacity: '0.5' }}>{moment(item.createdAt).add(5.50, 'hours').calendar()}</sub>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{ position: 'fixed', right: '0px', width: '70%', height: '100vh', backgroundImage: `url(${imageUrl})`, backgroundSize: '55%', float: "left", backgroundColor: "rgb(40,40,40)", display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '10%', backgroundColor: 'rgb(40,40,40)', padding: '25px 15px 25px 20px', color: 'white', fontSize: 'large' }}>{receiver.name}</div>
                <div style={{ overflow: 'auto', display: 'flex', flexDirection: 'column-reverse', height:'80%', flex:1 }}>
                    {/* <div className="d-flex justify-content-center" > */}
                    <ListGroup >
                        {(messages && messages.length > 0) && messages.map((item, index) => (
                            <ListGroup.Item className={`${receiver.email === item.receiverId ? 'align-self-end ' : ' align-self-start'}`} key={index} style={{ overflowWrap: 'break-word', maxWidth: '70%', width: 'auto', margin: '5px 5px 5px 5px', backgroundColor: 'rgb(5,70,64)', color: 'white', borderRadius: '5px', padding: '15px 15px 15px 15px' }}>
                                {item.message}
                                <br></br>
                                <sub style={{ padding: '10px 0px 5px 0px', fontSize: 'x-small', opacity: '0.5' }}>{moment(item.createdAt).add(5.50, 'hours').calendar()}</sub>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                </div>
                <Form onSubmit={handleSubmit} style={{ height: '10%' }}>
                    <Form.Group >
                        <InputGroup >
                            <Form.Control
                                as="textarea"
                                required
                                placeholder='Type a message'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                style={{
                                    position: 'fixed', bottom: "0px", width: '60%',
                                    border: '0px', borderRadius: '0px',
                                    resize: 'none', backgroundColor: 'rgb(40,40,40)', height: '80px', color: 'white'
                                }}
                            />
                            <Button type="submit" onMouseEnter={() => setBgcolor('rgb(56,56,56)')}
                                onMouseLeave={() => setBgcolor('rgb(40,40,40)')} style={{ position: 'fixed', right: '0px', bottom: "0px", width: '10%', height: '80px', border: 'none', backgroundColor: bgcolor, boxShadow: 'none', }} >--{'>'}</Button>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}