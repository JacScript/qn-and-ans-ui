import axios from "axios";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import VotingButton from "../components/VotingButton.jsx";
// import { configureStore } from "@reduxjs/toolkit";

const QuestionPage = (props) => {
  const [question, setQuestion] = useState(null);
  const { id } = props.match.params;


  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        // const { id } = props.match.params;
        const response = await axios.get(
          `http://localhost:3000/question/${id}`,
          { withCrendetials: true }
        );
        const data = response.data.question;
        // console.log(data.user.username);
        setQuestion(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchQuestion();
  }, []);

  // const { userInfo } = useSelector((state) => state.auth);-

  return (
    <div className="text-white bg-[#393939] w-screen min-h-screen">
      <Header />
      {question && (
        <div className="flex flex-col w-11/12 h-dvh mx-auto">
          <div className="my-8 border-b-[1px] pb-[10px] border-[rgba(255,255,255,.1)]">
            <h1 className=" text-3xl text-white">{question.title}</h1>
          </div>

          <div className="flex gap-[60px]">
            <div className="">
              <VotingButton
                 questionId ={ id}

              />
            </div>

            <div className="flex-1">
              <div className="">
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

                <div className="flex">
                  <span className="mr-4 italic">x time ago</span>
                  <Link to={"/users/" + props.id} className="text-[#3ca4ff]">
                    {question.user.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
