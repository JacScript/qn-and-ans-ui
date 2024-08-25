import React from "react";

const VotingButton = () => {
  return (
    <div>
      <button className="border-0 bg-none text-[2em]  text-[#bbb] cursor-pointer w-[50px] text-center">&#9650;</button>
      <div  className="w-[50px] text-center">0</div>
      <button className="border-0 bg-none text-[2em]  text-[#bbb] cursor-pointer w-[50px] text-center">&#9660;</button>
    </div>
  );
};

export default VotingButton;
