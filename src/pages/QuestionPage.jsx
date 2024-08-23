import axios from "axios";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

const QuestionPage = (props) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const { id } = props.match.params;
        const response = await axios.get(
          `http://localhost:3000/question/${id}`,
          { withCrendetials: true }
        ); 
        const data = response.data.question;
        console.log(data)
        setQuestion(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchQuestion();
  }, []);

  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="text-white bg-[#393939] w-screen min-h-screen">
      <Header />
      {question && (
        <div className="flex flex-col w-11/12 h-dvh mx-auto">
          <div className="my-8">
            <h1 className=" text-3xl text-white">{question.title}</h1>
          </div>
          <div>
            <ReactMarkdown>{question.questionText}</ReactMarkdown>
            {/* <p>{question.questionText}</p> */}
          </div>
          <div className="flex justify-between">
            <div>
              {question.tags?.map((tag) => (
                <span
                  key={tag} // Add a unique key for each tag
                  className="p-[7px] text-[.9rem] rounded-[4px] text-[#9cc3db] bg-[#3e4a52] mr-[5px] inline-block"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>{userInfo.username}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
