import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory , Link } from "react-router-dom";
import Button from "../components/ButtonComponent";
import {LoginUser} from "../Store/UserSlice.js";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";

import "../App.css";


const Login = () => { 
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Access loading and error state from Redux
  const { loading, error } = useSelector((state) => state.user);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userCredentials = { email, password };
    // Dispatch LoginUser action with user credentials
    dispatch(LoginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        history.push("/");
      }
    });
  };
   

  return (
    <div className="bg-[#393939] w-screen h-screen">
      <Header />

      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
      {error && <div className="text-white bg-[rgba(255,0,0,0.1)] p-2 text-xs border-2 rounded-[5px] border-red-600 text-center">{error}</div>}

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

          <Button type="submit" title={loading ? "Loading...." : "Login"} />
          <p className="text-center pt-2">OR</p>
          <div className="text-xs">
            <div className="flex my-2">
              <p className="mr-2">Dont Have an account:</p>
              <Link to="/signup">SIGN UP PAGE</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
