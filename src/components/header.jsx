import React, {  useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import Button from "./ButtonComponent";
import { useSelector, useDispatch } from "react-redux";

// function getUser() {
//   let user = localStorage.getItem("user");
//   if (user) {
//     user = JSON.parse(user);
//   } else {
//     user = null;
//   }
//   return user;
// }

const Header = () => {
  // const { user } = useContext(UserContext);
  // const [user, setUser] = useState(getUser());

  // const handleLogout = () => {
  //   localStorage.clear('user');
  //   // cookies.remove('Token');
  //   setUser(null);
  // }

  const { userInfo } = useSelector((state) => state.auth);



  return (
    <div className="text-white flex  max-md:h-10 shadow-sm shadow-[rgba(0,0,0,.2)] ">
      <div className="flex-[1] ">
        <Link
          to={"/"}
          className="h-full pb-[8px]  flex justify-center items-center text-[#fff] py-0 px-[px]"
        >
          <i className="fa-brands fa-stack-overflow mt-[10px]  text-[30px] inline-block float-left" />
          <p href="#" className="pl-[5px] inline-block pt-[15px] font-[300] max-md:text-[15px]">
            {" "}
            stack <span className="font-normal">overcloned</span>
          </p>
        </Link>
      </div>

      <div className="max-md:flex-[1] flex-[4] md:w-64 md:pb-[12px] md:px-2 max-md:h-full">
        <form action="" className="">
          <input
            className="md:w-full rounded-[3px] border border-gray-700 bg-[rgba(0,0,0,.1)] md:py-[10px] px-[6px] mt-[9px]"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>

      <div className="flex-[1] w-full">
        {userInfo ? (
          <div className="text-center max-md:flex-[1] pb-[px] flex justify-between gap-4 items-center pl-4 w-full h-full ">
            {/* <Link to="/profile" className="flex-2">             */}
           <span className="flex-2 max-md:text-[15px]">
          <Link to={`/users/${userInfo.id}`}>
          {/* <Link to="/profile"> */}
          {userInfo.username}
          </Link> 
            </span> 
            {/* </Link> */}
            {/* <span>
            <button className="bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  flex-1 px-2 text-xs items-center" onClick={handleLogout}>Log Out</button>
            </span> */}
          </div>
        ) : (
          <div className="text-center max-md:flex-[1] pb-[px] flex justify-center gap-4 items-center h-full">
            <Link to="/login" className="max-md:text-[15px] ">
              Log In
            </Link>
            <Link to="/signup" className="max-md:text-[15px]">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
