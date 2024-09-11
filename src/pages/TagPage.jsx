import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Button from "../components/ButtonComponent";

const TagPage = ({match}) => {
    return(
        <div  className='bg-[#393939] w-screen h-screen'>
            <Header/>
            <div className="flex justify-between py-[px] px-[20px] text-white my-6">
        <h1 className="text-[1.5rem]">{match.params.name}</h1>
        <div>

        <Button
          variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-1 flex align-middle px-[10px] text-sm flex justify-center items-center"
          onClick={() => {}}
          type="submit"
          title="Follow"
       />
        </div>
      </div>
        </div>
    )
}


export default TagPage;
