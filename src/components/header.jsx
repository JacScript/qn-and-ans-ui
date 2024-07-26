import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

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

  return (
    <div className="text-white flex  shadow-sm shadow-[rgba(0,0,0,.2)]">
      <div className="flex-auto w-2 bg-slate-600">
        <Link
          to={"/"}
          className="h-[60px] leading-[30px] inline-block text-[#fff] py-0 px-[15px]"
        >
          <i className="fa-brands fa-stack-overflow text-[30px] mt-[10px] inline-block float-left" />
          <a href="#" className="pl-[5px] inline-block pt-[15px] font-[300]">
            {" "}
            stack <span className="font-normal">overcloned</span>
          </a>
        </Link>
      </div>

      <div className="bg-white flex-auto w-64">
        <form action="" className="">
          <input
            className="w-full rounded-[3px] border border-gray-700 bg-[rgba(0,0,0,.1)] py-[10px] px-[6px] mt-[9px]"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>

      <div className=" flex-auto w-14">
        {user ? (
          <div className="flex justify-start items-center text-white">
            {user.username}
          </div>
        ) : (
          <div className="flex justify-start items-center">
            <Link to="/login" className="text-center">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
