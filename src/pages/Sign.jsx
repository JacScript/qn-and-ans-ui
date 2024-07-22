import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ButtonComponent";

import "../App.css";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post("http://localhost:3000/auth/signup", {
        username,
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
        <h1 className="font-bold text-center text-2xl mb-4">Sign Up</h1>
        <label htmlFor="username">UserName:</label>
        <input
         className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2"
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
         className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2 "
          type="email"
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
         className="py-[8px] bg-[rgba(255,255,255,.1)] mb-[16px] pl-2"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" title='SIGN UP'/>
        <p className="text-center py-2">OR</p>
        <div className="flex text-sm">
        <p className="mr-4">Have an account</p>
        <Link to="/login">LOGIN PAGE</Link>
        </div>
      </form>
    </div>
  );
};

export default Sign;
