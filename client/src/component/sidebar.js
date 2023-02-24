import React from 'react'
import { ListGroup} from 'react-bootstrap'
import { Tab, Nav, Modal } from 'react-bootstrap'
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function Sidebar({receiver,setReceiver}) {
    const [contacts,setContacts] = useState([]);
 
    const [bgcolor,setBgcolor] = useState('rgb(40,40,40)');

    useEffect(()=>{
        const getContacts = async()=>{
            try {
                const email = localStorage.getItem('pernToken');
                await axios.get(`http://localhost:5000/contacts`,{email:email})
                .then((response)=> setContacts(...contacts,response.data));
            } catch (error) {
                console.log(error)
            }
        }
        getContacts()
    },[])

  return (
  <div style={{float:"left" ,backgroundColor:"rgb(40,40,40)",height:'100vh' , width: '30%', color:'white' }} className="d-flex flex-column">
          <div style={{border:'0px',backgroundColor:'rgb(40,40,40)',
          color:'white'}}>Chats</div>
          <br></br>
        <div>
           <ListGroup >
            {contacts.map((contact,index) => (
            <ListGroup.Item onClick={()=>{setReceiver(contact)}} action variant="primary" key={index} style={{backgroundColor:'rgb(40,40,40)',color:'white',border:'0px'}}>
                {contact.name}
            </ListGroup.Item>
            ))}
            </ListGroup>
        </div>
  </div>
  )
}