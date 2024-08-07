import React, { useEffect, useState } from "react";
import QuestionRow from "./QuestionRow";
import { Link } from "react-router-dom";
import Ask from "../pages/Ask";
import axios from "axios";
// import { getAllQuestions } from "../Store/QuestionSlice";
// import { useDispatch, useSelector } from "react-redux";

const QuestionContainer = (props) => {
  const [questions, setQuestions] = useState(null);
  // const dispatch = useDispatch();
  // const {questions,loading, error } = useSelector((state) => state.questions);
  

  useEffect(() => {

    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/questions", {
          withCrendetials: true,
        });
        const data = response.data;
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
        {questions && questions.map((question) =>  
            <QuestionRow key={question._id} title={question.title} id={question._id}/> 
          )}
      {/* </div> */}
    </div>
  );
};

export default QuestionContainer;
