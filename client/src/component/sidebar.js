import React from 'react'
import { ListGroup } from 'react-bootstrap'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Sidebar({ receiver, setReceiver }) {
    const [contacts, setContacts] = useState([]);
    const [activeIndex,setActiveIndex] = useState();

    const logout = async (event) => {
        localStorage.removeItem('pernToken');
        window.location = "/";
    }
    useEffect(() => {
        const getContacts = async () => {
            try {
                await axios.post(`http://localhost:5000/contacts`, { 
                    email: localStorage.getItem('pernToken') 
                }).then(response => setContacts(...contacts, response.data));
            } catch (error) {
                console.log(error)
            }
        }
        getContacts()
    }, [])

    return (
        <div style={{ float: "left", backgroundColor: "rgb(40,40,40)", position: 'fixed', height: '100%', width: '30%', color: 'white' }} className="d-flex flex-column">
            <div style={{
                height: '5%', border: '0px', backgroundColor: 'rgb(40,40,40)',
                color: 'white', padding: '20px 20px 20px 20px', fontSize: 'x-large'
            }}>Chats</div>
            <br></br>
            <div style={{ height: '80%',overflowY:'auto' }}>
                <ListGroup >
                    {contacts.map((contact, index) => (
                        <ListGroup.Item onClick={() => { setReceiver(contact);setActiveIndex(index) }} key={index} style={{backgroundColor: index===activeIndex ? 'rgb(56,56,56)' : 'rgb(40,40,40)',color:'white',border: '0.5px solid black', fontSize: 'large' }}>
                            {contact.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <button size="sm" onClick={() => { logout() }} style={{ border: '1px solid white', color: 'white', backgroundColor: 'transparent', width: '85%', height: '5%', margin: 'auto auto 30px auto', boxShadow: 'none' }} variant="info">Logout</button>
        </div>
    )
}