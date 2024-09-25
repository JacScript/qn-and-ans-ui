import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Button from "../components/ButtonComponent.jsx";
import { useLogoutMutation, useUpdateUserMutation } from "../slices/userApiSlice.js";
import { logout } from "../slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
// import { useHistory } from 'react-router-dom'

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading: isUpdating }] = useUpdateUserMutation();



  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo.setUsername, userInfo.setEmail]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
    } else {
      try {
        
        const response = await updateProfile({
          _id: userInfo.id,
          username,
          email,
          password
        }).unwrap();
         dispatch(setCredentials({...response}));
         toast.success("Profile Updated")
      } catch (err) {
         toast.error(err?.data?.message || err.error)
      }
    }
  };

  const [logoutApiCall, { isLoading }] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-[#393939] w-screen h-screen">
      <Header />
      <div className="px-[30px] py-[20px]">
        <h1 className="text-[1.5rem] text-white">Profile</h1>

        <form action="" className="text-white">
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

          <div className="w-full flex justify-between">
            <div className="w-32">
              <Button
                title={isLoading ? "Loading...." : "Update"}
                onClick={submitHandler}
                variant="bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm"
              />
            </div>

            <div className="w-32">
              <Button
                title={isLoading ? "Loading...." : "LogOut"}
                onClick={logoutHandler}
                variant="bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
