import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobSearch from "./components/JobSearch"
import React, { useState, useEffect } from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/JobSearch" element={<JobSearch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;