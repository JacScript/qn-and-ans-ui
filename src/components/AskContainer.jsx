import React from "react";
import ReactMarkdown from 'react-markdown';
// import gfm from "remark-gfm";
import Button from "./ButtonComponent";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";




const AskContainer = () => {
  const history = useHistory();

  useHistory
  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const sendQuestion = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/questions', {
        title,
        questionText
      });

      if(response.data){
          history.push('/')
      }

      console.log('Question posted successfully:', response.data);
      // Handle success, e.g., clear form fields, show success message
    } catch (error) {
      console.error('Error posting question:', error);
      // Handle error, e.g., display error message to user
    }
  };

  return (
    <div className="flex flex-col w-11/12 h-dvh mx-auto ">
      <form onSubmit={sendQuestion}>
        <div className="w-5/6 mx-auto mt-6 bg-none">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent rounded-[3px] p-[10px] text-white box-border border-2 w-full border-[#777]"
            type="text"
            placeholder="Title of your question"
          />
        </div>
        <div className="w-5/6 mx-auto mt-6 bg-none">
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            className=" text-white bg-transparent p-[10px] rounded-[3px] box-border border-2 w-full border-[#777] min-h-[200px]"
            type="text"
            placeholder="More information about your question. You can use workspace here"
          />
        </div>

        {/* <div className="bg-[#444] rounded-[5px] p-[20px]"> */}
        {/* <ReactMarkdown plugins={[gfm]} children={''} /> */}

        <div className="w-5/6 mx-auto p-[20px] bg-[#444] nb-[20px] rounded-[5px] text-white">
          <ReactMarkdown>{questionText}</ReactMarkdown>
        </div>

        <div className="w-5/6 mx-auto mt-6">
          <Button type="submit" title="Post a Question" />
        </div>
      </form>
    </div>
  );
};

export default AskContainer;
