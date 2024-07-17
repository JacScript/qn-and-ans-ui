import React from "react";
import ReactMarkdown from 'react-markdown';
import gfm from "remark-gfm";
import Button from "./ButtonComponent";
import { useState } from "react";

const AskContainer = () => {

  const [questionTitle, setQuestionTitle] = useState( '');
  const [questionArea, setQuestionArea] = useState('')

  return (
    <div className="flex flex-col w-11/12 h-dvh mx-auto ">
      <div className="w-5/6 mx-auto mt-6 bg-none" >
        <input
          value={questionTitle}
          onChange={e => setQuestionTitle(e.target.value ) }
          className="bg-transparent rounded-[3px] p-[10px] text-white box-border border-2 w-full border-[#777]"
          type="text"
          placeholder="Title of your question"
        />
      </div>
      <div className="w-5/6 mx-auto mt-6 bg-none">
        <textarea
        value={questionArea}
        onChange={e => setQuestionArea(e.target.value)}
        className=" text-white bg-transparent p-[10px] rounded-[3px] box-border border-2 w-full border-[#777] min-h-[200px]"
          type="text"
          placeholder="More information about your question. You can use workspace here"
        />
      </div>
      
      {/* <div className="bg-[#444] rounded-[5px] p-[20px]"> */}
        {/* <ReactMarkdown plugins={[gfm]} children={''} /> */}
       
       <div className='w-5/6 mx-auto p-[20px] bg-[#444] nb-[20px] rounded-[5px]'>
         <ReactMarkdown >
             {questionArea}
          </ReactMarkdown>  
       </div>

      <div className="w-5/6 mx-auto mt-6">
        <Button type='button' title='Post a Question' to={'/post'}/>
      </div>
    </div>
  );
};

export default AskContainer;
