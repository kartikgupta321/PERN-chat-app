import React, {useState } from 'react'
import "./login.css";
import Sidebar from './sidebar';
import OpenConversations from './openConversations';

export default function Dashboard() {
    const [receiver,setReceiver] = useState([]);

    return (
        <div className='d-flex'>
            <Sidebar receiver={receiver} setReceiver={setReceiver}/>
            <OpenConversations receiver = {receiver} setReceiver={setReceiver}/>
        </div>
      )
}