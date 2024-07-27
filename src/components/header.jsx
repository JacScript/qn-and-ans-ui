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
          <div className="text-center pb-[px] w-full h-full mt-[25px]">
            {user.username}
          </div>
        ) : (
          <div className="text-center pb-[px] w-full h-full mt-[25px]">
            <Link to="/login" className="">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
