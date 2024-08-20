import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ButtonComponent";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";

// import { SignUpUser } from "../Store/UserSlice.js";

import "../App.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  // const { loading, error } = useSelector((state) => state.user);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // console.table(username, email,password)

  //   const userCredentials = { username, email, password };
  //   //Dispatch SignUpUser action with user credentilas
  //   dispatch(SignUpUser(userCredentials)).then((result) => {
  //     if (result.payload) {
  //       setUsername("");
  //       setEmail("");
  //       setPassword("");
  //       history.push("/");
  //     }
  //   });
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const response = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...response }));
        history.push("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="sign-up-container bg-[#393939] w-screen h-screen">
      <form className="sign-up-form" action="#">
        <h1 className="font-bold text-center text-2xl mb-4">Sign Up</h1>
        {/* {error && 
          <div className="text-white bg-[rgba(255,0,0,0.1)] p-2 text-xs border-2 rounded-[5px] border-red-600 text-center mb-2">
            {error} */}
        {/* </div>
        } */}
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
          value={confirmPassword}
          placeholder="******"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label htmlFor="password">Confirm Password:</label>
        <input
          className="py-[8px] bg-[rgba(255,255,255,.1)] mb-[16px] pl-2"
          type="password"
          value={password}
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          title={isLoading ? "Loading...." : "Sign Up"}
          onClick={submitHandler}
        />
        {/* <Button type="submit" title={loading ? "Loading...." : "Sign Up"} /> */}
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
