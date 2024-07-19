import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

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
        })
        .then((response) => {
          if(response.data.status){
            navigate('/')
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-96">
      <h1>Login</h1>

      <form className="flex flex-col gap-4 space-x-6 w-4/6 mx-auto" onSubmit={handleSubmit}>
        

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" >Sign Up</button>
      </form>

      <br />
      <p>OR</p>

      <Link to="/forgotPassword">Forgot Password</Link>
      <br />
      <p>Dont Have an account</p>
      <Link to="/sign">SIGN UP PAGE</Link>
    </div>
  );
};

export default Login;
