import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import React from "react";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Mentee from './Components/Mentee';
import Coordinator from './Components/Coordinator';
import Mentor from './Components/Mentor';
import RecommendedCourses from "./Components/RecommendedCourses";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/mentee" element={<Mentee />} />
            <Route exact path="/mentor" element={<Mentor />} />
            <Route exact path="/Coordinator" element={<Coordinator />} />
            <Route exact path="/recommendedcourses" element={<RecommendedCourses />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
