import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/login';
import Signup from './component/signup';
import Dashboard from './component/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={localStorage.getItem('pernToken') ? <Dashboard/>: <Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;