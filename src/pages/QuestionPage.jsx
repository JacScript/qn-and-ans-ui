import axios from "axios";
import ReactMarkdown from "react-markdown";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import VotingButton from "../components/VotingButton.jsx";
import VotingCommentButton from "../components/VotingCommentButton.jsx";
import BlueLinkButon from "../components/AddComment.jsx";
import CommentForm from "../components/CommentForm.jsx";
import AnswerComponent from "../components/AnswerComponent.jsx";
// import { configureStore } from "@reduxjs/toolkit";

const QuestionPage = (props) => {
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  const { id } = props.match.params;
  const { userInfo } = useSelector((state) => state.auth);

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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/question/${id}/comments`,
          { withCrendetials: true }
        );

        const data = response.data.comments;
        setComments(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="text-white bg-[#393939] w-screen min-h-screen pb-20">
      <Header />
      {question && (
        <div className="flex flex-col w-11/12 h-dvh mx-auto">
          <div className="my-8 border-b-[1px] pb-[10px] border-[rgba(255,255,255,.1)]">
            <h1 className=" text-3xl text-white">{question.title}</h1>
          </div>

          <div className="flex gap-[60px]">
            {/* <div className=""> */}
            <VotingButton questionId={id} initialvotes={question.votes} />
            {/* </div> */}

            <div className="flex-1 ">
              <div className="">
                <ReactMarkdown>{question.questionText}</ReactMarkdown>
                {/* <p>{question.questionText}</p> */}
              </div>

              <div className="flex justify-between">
                <div>
                  {question.tags?.map((tag) => (
                    <Link
                      to="#"
                      key={tag} // Add a unique key for each tag
                      className="p-[7px] text-[.9rem] rounded-[4px] text-[#9cc3db] bg-[#3e4a52] mr-[5px] inline-block no-underline hover:underline  hover:bg-[#5e6a72] hover:text-[#bce3fb] transition duration-700 ease-in-out"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <div className="flex">
                  <span className="mr-4 italic  text-[#888]">x time ago</span>
                  <Link to={"/users/" + props.id} className="text-[#3ca4ff]">
                    {question.user.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {comments && comments.length > 0 && (
            <div className="border-y  border-[rgba(255,255,255,.1)] ml-24">
              {comments.map((comment) => (
                <div className="text-white flex h-6 mb-1 text-sm" key={comment._id}>
             <div className="h-full"> <VotingCommentButton commentID={comment._id} initialvotes={comment.votes} /></div>
              <div className="flex justify-center items-center py-1 h-full">
              <p>{comment.memo}</p>
                  <p className="ml-1">
                    {" "}
                    &nbsp;--&nbsp;
                    <Link to={"/user/" + props.id} className="text-[#3ca4ff]">
                      {" "}
                      {comment.user?.email}
                    </Link>
                    <span className="italic ml-2 text-[#888]">x time ago</span>
                  </p>

              </div>
                </div>
              ))}
            </div>
          )}
          {showCommentForm && (
            <CommentForm
              questionId={id}
              userId={userInfo.id}
              setComments={setComments} // Pass function to update comments stat
              setShowCommentForm={setShowCommentForm}
              comments={comments}
            />
          )}
          {!showCommentForm && (
            <BlueLinkButon
              className="flex justify-start text-[#3ca4ff] cursor-pointer border-0 hover:text-[#1c84df] pl-24"
              onClick={() => setShowCommentForm(true)}
            >
              Add Comment{" "}
            </BlueLinkButon>
          )}
          <hr className="my-5 mx-0 border-[rgba(255,255,255,.1)]"/>
          <AnswerComponent/>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
