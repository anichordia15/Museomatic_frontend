import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './SignUp';
import Gallery from './Gallery';
import Feedback from './Feedback';
import About from './About';
import Admin from './Admin';
import Registration from './Registration';
import Eticket from './Eticket';

function App() {

  return ( 
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={ <Home/>}/>
          <Route path="/feedback" element={ <Feedback/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/admin" element={ <Admin/>}/>
          <Route path="/gallery" element={ <Gallery/>}/>
          <Route path="/signup" element={ <Signup/>}/>
          <Route path="/registration" element={ <Registration/>}/>
          <Route path="/eticket" element={ <Eticket/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
