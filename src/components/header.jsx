import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fastackoverFlow } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const Header = () => {
  return (
    <div className="text-white shadow-sm shadow-[rgba(0,0,0,.2)] grid grid-cols-[220px_minmax(900px,_1fr)_200px] gap-[20px]">
      <div className="h-[60px] leading-[30px] inline-block text-[#fff] py-0 px-[15px]">
        <i className="fa-brands fa-stack-overflow text-[30px] mt-[10px] inline-block float-left"></i>
        <a href="#" className="pl-[5px] inline-block pt-[15px]">
          {" "}
          Stack <span className="font-bold">OverCLoned</span>
        </a>
      </div>
      <div>
        <form action="" className="">
          <input
            className="w-full rounded-[3px] border border-gray-700 bg-[rgba(0,0,0,.1)] py-[10px] px-[6px] mt-[9px]"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div>
        <a href="" className="">
          Jackson
        </a>
      </div>
    </div>
  );
}

export default Header;