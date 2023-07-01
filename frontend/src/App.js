import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from "react";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Mentee from './Components/MenteeNav';
import Coordinator from './Components/Coordinator';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/mentee" element={<Mentee />} />
            <Route exact path="/Coordinator" element={<Coordinator />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
