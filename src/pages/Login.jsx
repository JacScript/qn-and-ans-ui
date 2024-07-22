import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ButtonComponent";



import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      }).then((response) => {
        if (response.data.status) {
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1 className="font-bold text-center text-2xl mb-4">Login</h1>
        <label htmlFor="email">Email:</label>
        <input
        className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2"
          type="email"
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
        className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2 mb-4"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" title="Sign Up" />
        <p className="text-center pt-2">OR</p>
        <div className="text-xs">
          <Link to="/forgotPassword">Forgot Password</Link>
          <div className="flex my-2">
          <p className="mr-2">Dont Have an account:</p>
          <Link to="/sign" >SIGN UP PAGE</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
