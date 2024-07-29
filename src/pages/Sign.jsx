import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ButtonComponent";
import { signUpUser } from "../Store/UserSlice.js";
import { useDispatch, useSelector } from "react-redux";

import "../App.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error } = useSelector((state) => state.user);


  const handleSubmit =  (e) => {
    e.preventDefault();

    // console.table(username, email,password)

    const userCredentials = { username, email , password};
    //Dispatch SignUpUser action with user credentilas
    dispatch(signUpUser(userCredentials)).then((result) => {
      if(result.payload){
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/")
      }
    })

    // setMessage(null);
    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };

    //   setLoading(true);

    //   const { data } = await Axios.post(
    //     "http://localhost:3000/auth/signup",
    //     {
    //       username,
    //       email,
    //       password,
    //     },
    //     config
    //   );

    //   setLoading(false);
    //   localStorage.setItem("userInfo", JSON.stringify(data));
    // } catch (error) {
    //   setError(error.response.data.message);
    //   console.log(error);
    // }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
      {error && <div className="text-white">{error}</div>}
        <h1 className="font-bold text-center text-2xl mb-4">Sign Up</h1>
        <label htmlFor="username">UserName:</label>
        <input
          className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2"
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2 "
          type="email"
          value={email}
          placeholder="Email"
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          className="py-[8px] bg-[rgba(255,255,255,.1)] mb-[16px] pl-2"
          type="password"
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" title={loading ? "Loading...." : "Sign Up"} />
        <p className="text-center py-2">OR</p>
        <div className="flex text-sm">
          <p className="mr-4">Have an account</p>
          <Link to="/login">LOGIN PAGE</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
