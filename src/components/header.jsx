import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import Button from "./ButtonComponent";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const Header = () => {
  // const { user } = useContext(UserContext);
  const [user, setUser] = useState(getUser());

  const handleLogout = () => {
    localStorage.clear('user');
    setUser(null);
  }

  return (
    <div className="text-white flex w-full shadow-sm shadow-[rgba(0,0,0,.2)]">
      <div className="flex-[1]">
        <Link
          to={"/"}
          className="h-full pb-[8px]  flex justify-center items-center text-[#fff] py-0 px-[px]"
        >
          <i className="fa-brands fa-stack-overflow mt-[10px] text-[30px] inline-block float-left" />
          <a href="#" className="pl-[5px] inline-block pt-[15px] font-[300]">
            {" "}
            stack <span className="font-normal">overcloned</span>
          </a>
        </Link>
      </div>

      <div className=" flex-[4] w-64 pb-[12px] px-2">
        <form action="" className="">
          <input
            className="w-full rounded-[3px] border border-gray-700 bg-[rgba(0,0,0,.1)] py-[10px] px-[6px] mt-[9px]"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>

      <div className=" flex-[1] h-full">
        {user ? (
          <div className="text-center pb-[px] flex justify-between gap-4 items-center px-4 w-full h-full mt-[15px]">
            {/* <Link to="/profile" className="flex-2">             */}
           <span className="flex-2">
           {user.username}
            </span> 
            {/* </Link> */}
            <span>
            <button className="bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  flex-1 px-2 text-xs items-center" onClick={handleLogout}>Log Out</button>
            </span>
          </div>
        ) : (
          <div className="text-center pb-[px] flex justify-center gap-4 w-full h-full mt-[25px]">
            <Link to="/login" className="">
              Log In
            </Link>
            <Link to="/signup" className="">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
