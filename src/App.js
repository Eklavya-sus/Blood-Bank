import React,{useState} from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {

  return (
    <div>
    <Navbar/>
    <Homepage/>
    <div className='cursor'></div>
    </div>
  );
}

export default App;
