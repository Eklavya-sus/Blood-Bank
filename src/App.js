import React,{useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Register from './components/Register';

function App() {

  return (
    <div>

    <Navbar/>
    <Homepage/>
    <div className='cursor'></div>

    <Register />

    </div>
  );
}

export default App;
