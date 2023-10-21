import React,{useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import MydonorInfo from './components/MydonorInfo';

function App() {

  return (
    <div className="app">
        {/* <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
<Footer /> */}
<MydonorInfo />
    </div>
  );
}

export default App;