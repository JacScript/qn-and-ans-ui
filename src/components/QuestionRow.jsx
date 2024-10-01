import React from 'react'
import { Link } from "react-router-dom";
import Tag from './Tag';
import UserLink from './UserLink';


const QuestionRow = ({title,id, username, tags, age, userid}) => {
  return (
    <div className="">
      <div className="bg-[rgba(255,255,255,.1)] w-11/12 mx-auto flex justify-between border-t-2 border-t-[#555]">
        <div className="flex justify-center max-md:gap-1 md:gap-4 md:ml-[50px] max-md:h-10">
          <div className="flex flex-col text-center md:px-2 text-[white] max-md:h-full">
            <span className="max-md:text-[13px] text-[1.2rem] ">0</span>
            <span className="font-[700] max-md:text-[13px] max-md:font-[300] max-md:px-[4px] max-md:mt-[0.5px] flex justify-center text-[0.9rem] mt-[1px]">votes</span>
          </div>
          <div className="flex flex-col text-center md:px-2 text-[white] max-md:h-full">
            <span className="max-md:text-[13px] text-[1.2rem]  ">4</span>
            <span className="font-[700] max-md:text-[13px] max-md:font-[300] max-md:px-[4px] max-md:mt-[0.5px] flex justify-center text-[0.9rem] mt-[1px]">answers</span>
          </div>
          <div className="flex flex-col text-center md:px-2 text-[white] max-md:h-full">
            <span className="max-md:text-[13px] text-[1.2rem]">9</span>
            <span className="font-[700] max-md:text-[13px] max-md:font-[300] max-md:px-[4px] max-md:mt-[0.5px] flex justify-center text-[0.9rem] mt-[1px]">views</span>
          </div>
        </div>

        <div className="max-md:px-[10px] px-[30px] flex flex-col max-md:w-full w-4/5">
          <Link
            to={`/question/${id}`}
            className="text-[#3ca4ff] text-[1.1rem] mb-[2px] max-md:text-[0.8rem]"
          >
            {title}
          </Link>
          <div className="flex justify-between">
            <div className="md:flex">
              {tags.map((tag,idx) => (
                <Tag
                  key={idx} // Add a unique key for each element in the list
                  variant="text-[#9cc3db] bg-[#3e4a52] p-[4px] md:mb-[2px] rounded-[4px] max-md:text-[0.6rem] text-[.9rem] mr-[6px]"
                  name={tag.name}                  
                />
              ))}
            </div>
            <div className="float-right max-md:text-[0.6rem] ">
              <p>
                <span className="text-[.8rem] mr-2 italic text-[#888]">
                {new Date(age).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                   </span>
                <UserLink variant="text-[#3ca4ff] hover:underline" user={username} id={userid}/>
                {/* <UserLink className="text-[#3ca4ff]" > */}
                  {/* {username} */}
                {/* </UserLink> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionRow