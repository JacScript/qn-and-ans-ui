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
import AnswerComponent from "../components/PostAnswer.jsx";
import VotingAnswerButton from "../components/VotingAnswerButton.jsx";
import UserLink from "../components/UserLink.jsx";
import { Helmet } from "react-helmet";
// import { configureStore } from "@reduxjs/toolkit";

const QuestionPage = (props) => {
  const [question, setQuestion] = useState(null);
  const [comments, setComments] = useState("");
  const [answers, setAnswers] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);

  const { id } = props.match.params;
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // Prevent unnecessary fetches if id is not available

      try {
        const questionResponse = await axios.get(
          `http://localhost:3000/question/${id}`,
          { withCredentials: true }
        );
        const commentsResponse = await axios.get(
          `http://localhost:3000/question/${id}/comments`,
          { withCredentials: true }
        );
        const answersResponse = await axios.get(
          `http://localhost:3000/questions/${id}/answers`, // Use questions here (plural)
          { withCredentials: true }
        );

        const questionData = questionResponse.data.question;
        const commentsData = commentsResponse.data.comments;
        const answersData = answersResponse.data.answer;

  
        // console.log(answersData)
        setQuestion(questionData);
        setComments(commentsData);
        setAnswers(answersData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  // useEffect(() => {
  //   const fetchQuestion = async () => {
  //     try {
  //       // const { id } = props.match.params;
  //       const response = await axios.get(
  //         `http://localhost:3000/question/${id}`,
  //         { withCrendetials: true }
  //       );
  //       const data = response.data.question;
  //       // console.log(data.user.username);
  //       setQuestion(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchQuestion();
  // }, []);

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/question/${id}/comments`,
  //         { withCrendetials: true }
  //       );

  //       const data = response.data.comments;
  //       setComments(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchComments();
  // }, []);

  // useEffect(() => {
  //   const fetchAnswers = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/questions/${id}/answers`,
  //         { withCrendetials: true }
  //       );

  //       const data = response.data.answers;
  //       // console.log(data)
  //       setAnswer(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchAnswers();
  // }, []);

  return (
    <div className="text-white bg-[#393939] w-screen h-full pb-20">
      <Header />
      {question && (
        <div className="flex flex-col w-11/12 h-full mx-auto">
          <Helmet>
            <title>{question.title} - StackOverCloned</title>
          </Helmet>
          <div className="max-md:my-4 my-8 border-b-[1px] pb-[10px] border-[rgba(255,255,255,.1)]">
            <h1 className="max-md:text-xl text-3xl text-white">
              {question.title}
            </h1>
          </div>

          <div className="flex md:gap-[60px] ">
            {/* <div className=""> */}
            <VotingButton questionId={id} initialvotes={question.votes} />
            {/* </div> */}

            <div className="flex-1 ">
              <div className="font-[300]">
                <ReactMarkdown>{question.questionText}</ReactMarkdown>
                {/* <p>{question.questionText}</p> */}
              </div>

              <div className="flex justify-between">
                <div>
                  {question.tags?.map((tag) => (
                    <Link
                      to="#"
                      key={tag._id} // Add a unique key for each tag
                      className="max-md:p-[4px] p-[7px] max-md:text-[.6rem] text-[.9rem] rounded-[4px] text-[#9cc3db] bg-[#3e4a52] mr-[5px] inline-block no-underline hover:underline  hover:bg-[#5e6a72] hover:text-[#bce3fb] transition duration-700 ease-in-out"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>

                <div className="flex  max-md:text-[0.8rem]">
                  <span className="mr-4 italic text-[#888]">
                    {new Date(question.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <UserLink
                    variant="text-[#3ca4ff] pr-4 hover:underline"
                    user={question.user.username}
                    id={question.user._id}
                  />

                  {/* <span className="mr-4 italic  text-[#888]">{question.createdAt}</span> */}
                  {/* <Link to={"/users/" + props.id} className="text-[#3ca4ff]">
                    {question.user.email}
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
          {comments && comments.length > 0 && (
            <div className="border-y border-[rgba(255,255,255,.1)] ml-24">
              {comments.map((comment) => (
                <div
                  className="text-white flex h-6 mb-1 max-md:text-xs text-sm"
                  key={comment._id}
                >
                  <div className="h-full">
                    {" "}
                    <VotingCommentButton
                      commentID={comment._id}
                      initialvotes={comment.votes}
                    />
                  </div>
                  <div className="flex justify-center items-center py-1 h-full">
                    <p>{comment.memo}</p>
                    <p className="ml-1">
                      {" "}
                      &nbsp;--&nbsp;
                      <UserLink
                        variant="text-[#3ca4ff]"
                        user={comment.user?.username}
                        id={comment.user?._id}
                      />
                      {/* <Link to={"/user/" + props.id} className="text-[#3ca4ff]">
                        {" "}
                        {comment.user?.username}
                      </Link> */}
                      <span className="italic ml-2 text-[#888]">
                        {new Date(comment.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="">
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
                className="flex w-32 justify-start text-[#3ca4ff] cursor-pointer border-0 max-md:text-xs hover:text-[#1c84df] ml-24 "
                onClick={() => setShowCommentForm(true)}
              >
                Add Comment{" "}
              </BlueLinkButon>
            )}
          </div>

          <div className="mt-4">
            {answers &&
              answers.length > 0 &&
              answers.map((answer) => (
                <div
                  className="border-t flex border-[rgba(255,255,255,.1)] w-full p-0 md:p-1 mx-auto"
                  key={answer.id || answer._id}
                >
                  <div>
                    {" "}
                    <VotingAnswerButton
                      questionId={id}
                      answerId={answer._id}
                      initialvotes={answer.votes}
                    />{" "}
                  </div>

                  <div className="flex justify-center max-md:h-[30px]  h-[48px] max-md:text-xs text-base font-[300] items-center">
                    <p>{answer.text}</p>
                    <p className="ml-1">
                      {" "}
                      &nbsp;--&nbsp;
                      <UserLink
                        variant="text-[#3ca4ff]"
                        user={answer.user?.username}
                        id={answer.user?._id}
                      />
                      {/* <Link to={"/user/" + props.id} className="text-[#3ca4ff]">
                        {" "}
                        {comment.user?.username}
                      </Link> */}
                      <span className="italic ml-2 text-[#888]">
                        {new Date(answer.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </p>
                  </div>
                  {/* <div className="flex justify-center items-center bg-yellow-400">
                    <div>{answer.text}</div>
                  </div> */}
                </div>
              ))}
          </div>
          {/* {answers && answers.length > 0 && (
             answers.map((answer) => (
              <p>{answer.text}</p>
            ))
          ) } */}

          <hr className="max-md:my-1 my-2 mx-0 border-[rgba(255,255,255,.1)]" />

          <AnswerComponent
            userId={userInfo.id}
            questionId={id}
            setAnswers={setAnswers}
            answers={answers}
          />
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
