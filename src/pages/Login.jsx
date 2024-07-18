import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
   
     const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function  submitHandler(e){
        e.preventDefault();


        try {
          await axios
            .post("http://localhost:3000/login", {
              email,
              password,
            })
            .then((response) => {
              if (response.data = "Exist") {
                alert('User Logged in');
                history("/",{state:{id:email}});
              } else if(response.data = 'Not - Exist'){
                alert("Useris Not logged in")
              }
            });
        } catch (err) {
          console.log(err);
        }
    }





  return (
    <div className="">
      <h1>Login</h1>
      <form action="POST" className="">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          name=""
          id=""
        />

        <button type="submit" onClick={submitHandler}>Submit</button>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/sign">Sign in Page</Link>
    </div>
  );
};

export default Login;
