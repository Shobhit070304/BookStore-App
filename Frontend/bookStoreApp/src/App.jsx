import React from "react";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import { Routes, Route, Router, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import Contacts from "./components/Contact/Contacts";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/courses"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
