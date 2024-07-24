import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/ButtonComponent";

import "../App.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import LoginUser  from "../Store/userAction.js";

const Login = () => {

  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

//redux state
const {loading, error } = useSelector((state) => state.user)


  const navigate = useNavigate();

  // Axios.defaults.withCredentials = true;

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    let userCredentials = { email, password };
    dispatch(LoginUser(userCredentials), config).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    });
  };
 

  //   try {
  //     const userCredentials = {
  //       email, password
  //     }
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  //   try {

  //     const config = {
  //       headers: {
  //         "Content-type": "application/json"
  //       }
  //     }

  //     setLoading(true);

  //     const { data } = await Axios.post(
  //       "http://localhost:3000/auth/login",
  //       { email, password },
  //       config
  //     );

  //     await Axios.post("http://localhost:3000/auth/login", {
  //       email,
  //       password,
  //     }, config).then((response) => {
  //       if (response.data.status) {
  //     localStorage.setItem("userInfo", JSON.stringify())
  //         navigate("/");
  //       }
  //     });
  //     console.log(data);
  //     localStorage.setItem("userInfo", JSON.stringify(data)); 
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.response.data.message);
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <Header />

       {error && ( <div>{error}</div>) }
      {/* {error && <ErrorMessage/>} */}
        {/* {loading && <Loading />} */}
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
