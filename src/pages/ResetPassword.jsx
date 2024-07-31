import React, { useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/ButtonComponent";

import "../App.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:3000/auth/resetPassword/" + token, {
        password,
      }).then((response) => {
        if (response.data.status) {
          alert("Passowrd reset");
          navigate("/");
        }
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <form action="POST" className="sign-up-form">
        <h2 className="font-bold text-center text-2xl mb-4">New Passoword</h2>
        <input
          className="py-[8px] bg-[rgba(255,255,255,.1)] pl-2"
          type="password"
          autoComplete="off"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" onClick={handleSubmit} title="Reset" />
      </form>
    </div>
  );
};

export default ResetPassword;
