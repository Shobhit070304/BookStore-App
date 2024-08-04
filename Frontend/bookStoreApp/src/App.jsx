import React from "react";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import { Routes, Route, Router } from "react-router-dom";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contact/Contacts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default App;
