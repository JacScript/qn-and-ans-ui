import React, { createContext, useEffect, useState } from "react";
import Axios from 'axios';
import Home from "./pages/Home.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Ask from "./pages/Ask.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Sign.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import UserContext from "./UserContext.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

import "./App.css";

Axios.defaults.withCredentials = true;


const App = () => {
  const [user, setUser] = useState();

  const [checkingAuth, setCheckingAuth] = useState(true);


  // useEffect( () => {
  //   Axios.get("http://localhost:3000/auth/profile", {
  //     username,
  //   }).then(() => {
  //     (response) => {
  //       console.log(response);
  //       setCheckingAuth(false);
  //     }
  //   }).catch(
  //     (response) => {
  //       setCheckingAuth(false)
  //     }
  //   )
  // }, [])





  return (
    <div className="bg-[#393939] w-screen h-screen">
        <UserContext.Provider value={user}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
        </UserContext.Provider>
    </div>
  );
};

export default App;
