import React from 'react'
import { ListGroup} from 'react-bootstrap'
import { Tab, Nav, Modal } from 'react-bootstrap'
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function Sidebar() {
    const [contacts,setContacts] = useState([]);
    
    useEffect(()=>{
        const getContacts = async()=>{
            try {
                const response = await axios.get(`http://localhost:5000/contacts`)
                .then((response)=> setContacts(...contacts,response.data));
            } catch (error) {
                console.log(error)
            }
            finally{
            }
        }
        getContacts()
    },[])

  return (
    <div style={{height:'100vh',backgroundColor:'rgb(40,40,40)', width: '250px',color:'white' }} className="d-flex flex-column">
    <Tab.Container >
      <Nav variant="tabs" className="justify-content-center ">
        <Nav.Item style={{backgroundColor:'rgb(40,40,40)'}}>
          <div style={{border:'0px',backgroundColor:'rgb(40,40,40)',
          color:'white'}}>Chats</div>
        </Nav.Item>
      </Nav>
      <Tab.Content className=" overflow-auto flex-grow-1">
        <Tab.Pane>
        <div>
           <ListGroup variant="flush" style={{ width: '250px',color:'white' }}className="d-flex flex-column">
            {contacts.map(contact => (
            <ListGroup.Item key={contact.name}>
                {contact.name}
            </ListGroup.Item>
            ))}
            </ListGroup>
        </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  </div>
    
  )
}