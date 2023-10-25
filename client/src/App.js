import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './component/login';
import Signup from './component/signup';
import Dashboard from './component/dashboard';

const context = React.createContext();

function App() {
  return (
    <context.Provider value = "hello world">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={localStorage.getItem('pernToken') ? <Dashboard/>: <Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </context.Provider>
  );
}

export default App;