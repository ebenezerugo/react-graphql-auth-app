import React from 'react';
import {Routes , Route } from "react-router-dom"; 
import './App.css';
import Login from './features/login';
import Signup from './features/signup';
import Dashboard from './features/dashboard';

function App() {
  return (
    <div>
      <div className="container">
        <Signup/>
        <Login/>
      </div>

      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path ="*" element= {<Dashboard/>}/> 
      </Routes>
    </div>
  );
}

export default App;
