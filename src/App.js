
import './App.css';
import React, { useState } from 'react';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[mode,setMode] = useState("light")

  const[alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout (() =>{
      setAlert(null);
    },3000)
  }
  
  const toggleStyle = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled","success");
    }
  }
  
  return (
  <>
  {/* <Router> */}
  <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleStyle = {toggleStyle} />
  <Alert alert = {alert}/>
  <div className="container my-3">
    {/* <Routes>
      <Route exact path="/About" element = {<About/>}/> */}
      {/* <Route exact path="/" element = {<TextForm heading = "Enter the text to Analyse" mode = {mode} showAlert = {showAlert}/>}/> */}
      <TextForm heading = "Enter the text to Analyse" mode = {mode} showAlert = {showAlert}/>
    {/* </div>/</Routes> */}
  </div> 
  {/* </Router> */}
  {/* <About/> */}
  
  </>
  );
}

export default App;
