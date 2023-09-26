import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import Client from './pages/Client';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        
        <Route index element ={<Home/>} />
        <Route path ="/Login" element = {<Login/>}/>
        <Route path ="/Client" element = {<Client/>}/>
        <Route path="*" element = {<NoPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
//


export default App;
