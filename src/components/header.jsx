import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fastackoverFlow } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="text-white shadow-sm shadow-[rgba(0,0,0,.2)] grid grid-cols-[220px_minmax(900px,_1fr)_200px] gap-[20px]">
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
      <div>
        <form action="" className="">
          <input
            className="w-full rounded-[3px] border border-gray-700 bg-[rgba(0,0,0,.1)] py-[10px] px-[6px] mt-[9px]"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      {user && (
        <div className="flex justify-start items-center">
          <Link to="/profile" className="text-center">
            Jackson
          </Link>
        </div>
      )}

      {!user && (
        <div className="flex justify-start items-center">
          <Link to="/login" className="text-center">
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
