import React, { useState } from "react";
import Button from "./ButtonComponent";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import axios from "axios";

const AnswerComponent = ({questionId, userId,setAnswers, answers}) => {
  const [answer, setAnswer] = useState("");

 const postAnswer = async (e) => {
   e.preventDefault();

   try {
    
    const response = await axios.post("http://localhost:3000/questions/answer", {
      qID: questionId,
      text: answer,
      user: userId
    })

    if(response.data){
      const data = response.data.answer
      // console.log(response.data.answer)
      setAnswers([...answers,data ])
      setAnswer("");
    }

   } catch (error) {
     console.error("Error posting question:", error);
   }

 }


  return (
    <div className="w-full mx-auto">
      <div className="">
        <h1>Your Answer</h1>
      </div>

      <form>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className=" text-white  bg-transparent p-[10px] rounded-[3px] box-border border-2 w-full border-[#777] min-h-[200px]"
          type="text"
          placeholder="Your answer goes here. You can use markdown"
        />
        <Markdown remarkPlugins={[remarkGfm]} className="my-4 p-[20px] bg-[#444] nb-[20px] rounded-[5px] text-white">{answer}</Markdown>

        <Button
          variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  px-[10px] text-xs items-center w-32"
          type="submit"
          title="Post your Answer"
          onClick={(e) => postAnswer(e)}
        />
      </form>
    </div>
  );
};

export default AnswerComponent;
