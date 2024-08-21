import axios from "axios";
import ReactMarkdown from 'react-markdown';
import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import { configureStore } from "@reduxjs/toolkit";

const QuestionPage = (props) => {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const { id } = props.match.params;
        const response = await axios.get(
          `http://localhost:3000/questions/${id}`,{withCrendetials: true}
        ); // Replace with your API endpoint
        // console.log("Question is being fetched");
        const data = response.data.question;
        console.log(data)
        setQuestion(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchQuestion();
  }, []);


  
  return (
    <div className="text-white bg-[#393939] w-screen min-h-screen">
      <Header/>
      {question && (
        <div className="flex flex-col w-11/12 h-dvh mx-auto">
          <div className="my-8">
            <h1 className=" text-3xl text-white">{question.title}</h1>
          </div>
          <div>
             <ReactMarkdown>{question.questionText}</ReactMarkdown>
            {/* <p>{question.questionText}</p> */}
          </div>
          <div>
            {
              question.tags.map(( tag )=> {console.log(tag)})
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
