import React, { useEffect, useState } from "react";
import QuestionRow from "./QuestionRow";
import { Link } from "react-router-dom";
import Ask from "../pages/Ask";
import axios from "axios";

const QuestionContainer = () => {
  const [questions, setQuestions] = useState(null);
  

  useEffect(() => {

    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/questions", {
          withCrendetials: true,
        });
        const data = response.data;
        console.log(data);
        setQuestions(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <div className="flex justify-between py-[px] px-[20px] text-white my-6">
        <h1 className="text-[1.5rem]">Top Question</h1>
        <Link
          to={"/Ask"}
          className="bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm"
        >
          Ask Question
        </Link>
      </div>

      {/* <div> */}
        {questions && questions.map(question =>  
            <QuestionRow title={question.title}/> 
          )}
      {/* </div> */}
    </div>
  );
};

export default QuestionContainer;
