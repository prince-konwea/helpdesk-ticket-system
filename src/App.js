import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/login";
import Mainpage from "./mainpage/mainpage";
import SignUp from "./signup/signup";

function App() {
    return (

        <BrowserRouter>
    <Routes>
    <Route path="/" element={<Mainpage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>   
    )
}

export default App;