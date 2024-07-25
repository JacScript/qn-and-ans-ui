import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ButtonComponent";

import "../App.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import LoginUser  from "../Store/UserSlice.js";

const Login = () => {

    // State for form fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Access loading and error state from Redux
    const { loading, error } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredentials = { email, password };

    // Dispatch LoginUser action with user credentials
    try {
      await dispatch(LoginUser(userCredentials)); // Wait for action completion
      // Handle successful login (optional, depends on your API response)
      setEmail("");
      setPassword("");
      navigate("/"); // Redirect on success
    } catch (error) {
      console.error("Login error:", error); // Log the error for debugging
    }
  };

  return (
    <div>
      <Header />

       {error && (<div>{error}</div>)}
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h1 className="font-bold text-center text-2xl mb-4">Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2"
            type="email"
            value={email}
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2 mb-4"
            type="password"
            value={password}
            placeholder="******"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" title={ loading ? "Loading...." : 'Login'} />
          <p className="text-center pt-2">OR</p>
          <div className="text-xs">
            <Link to="/forgotPassword">Forgot Password</Link>
            <div className="flex my-2">
              <p className="mr-2">Dont Have an account:</p>
              <Link to="/sign">SIGN UP PAGE</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
