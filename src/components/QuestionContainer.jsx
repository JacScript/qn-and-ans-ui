import React, { useEffect, useState } from "react";
import QuestionRow from "./QuestionRow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import Ask from "../pages/Ask";
import axios from "axios";
// import { getAllQuestions } from "../Store/QuestionSlice";
// import { useDispatch, useSelector } from "react-redux";

const QuestionContainer = (props) => {
  const [questions, setQuestions] = useState(null);
  // const dispatch = useDispatch();
  // const {questions,loading, error } = useSelector((state) => state.questions);

  const { userInfo } = useSelector((state) => state.auth);


  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/questions", {
  //         withCrendetials: true,
  //       });
  //       const data = response.data;
  //       console.log(data);
  //       setQuestions(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchQuestions();
  // }, []);


  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     try {
  //       let response;
  //       console.log(userInfo)
  
  //       if (userInfo) {
  //         // User is logged in, fetch questions with userId in the route path
  //         response = await axios.get(`http://localhost:3000/questions/by-followed-tags/${userInfo.id}`, {
  //           withCredentials: true,
  //         });
  //       } else {
  //         // User is not logged in, fetch all questions
  //         response = await axios.get("http://localhost:3000/questions", {
  //           withCredentials: true,
  //         });
  //       }
  
  //       const data = response.data;
  //       console.log(data);
  //       setQuestions(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  
  //   fetchQuestions();
  // }, [userInfo]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let response;  
        if (userInfo) {
          // User is logged in, attempt to fetch questions by followed tags
          response = await axios.get(`http://localhost:3000/questions/by-followed-tags/${userInfo.id}`, {
            withCredentials: true,
          });
  
          // If the response is empty or null, fetch all questions instead
          if (!response.data || response.data.length === 0) {
            console.log("No questions found for followed tags, fetching all questions.");
            response = await axios.get("http://localhost:3000/questions", {
              withCredentials: true,
            });
          }
        } else {
          // User is not logged in, fetch all questions
          response = await axios.get("http://localhost:3000/questions", {
            withCredentials: true,
          });
        }
  
        const data = response.data;
        // console.log(data);
        setQuestions(data);
      } catch (error) {
        console.log(error.message);
      }
    };
  
    fetchQuestions();
  }, [userInfo]);
  
  

  return (
    <div className="bg-[#393939] w-screen h-full">
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
      {questions &&
        questions.map((question) => (
          <QuestionRow
            key={question._id}
            title={question.title}
            id={question._id}
            tags={question.tags.map((tag) => ({
              key: tag._id,  // Extract tag ID
              name: tag.name // Extract tag name
            }))} 
            age={question.createdAt}
            username={question.user.username} // Extract username
            userid={question.user._id} // Extract userid
          />
        ))}
      {/* </div> */}
    </div>
  );
};

export default QuestionContainer;
