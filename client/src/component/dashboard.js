import React, { useContext,useState } from 'react'
import "./login.css";
import Sidebar from './sidebar';
import OpenConversations from './openConversations';

// const wow = useContext();

export default function Dashboard() {
    const [receiver,setReceiver] = useState([]);

    return (
        <div className="d-flex" style={{background:'white',width:'100%' , height: '100%' }}>
            <Sidebar receiver={receiver} setReceiver={setReceiver}/>
            <OpenConversations receiver = {receiver}/>
        </div>
      )
}