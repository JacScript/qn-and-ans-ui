import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";
import Button from "./ButtonComponent";
import axios from "axios";
import { useHistory, Redirect } from "react-router-dom";

const AskContainer = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [tags, setTags] = useState([]);
  const [redirect, setRedirect] = useState("");

  const sendQuestion = async (e) => {
    e.preventDefault();
    console.log(tags);

    try {
      const response = await axios.post("http://localhost:3000/question", {
        title,
        questionText,
        tags,
      });

      if (response.data) {
        // console.log(response.data.question._id);
        // history.push(`/question/${response.data.question._id}`);
        setRedirect("/question/" + response.data.question._id);
      }

      // Handle success, e.g., clear form fields, show success message
    } catch (error) {
      console.error("Error posting question:", error);
      // Handle error, e.g., display error message to user
    }
  };

  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col w-11/12 max-h-full mx-auto ">
      {redirect && <Redirect to={redirect} />}
      <form action="#">
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
        <div className="flex w-5/6 mx-auto my-2 flex-wrap min-h-[40px] rounded-[5px] py-0 px-[10px]  box-border border-2  border-[#777]">
          <ul className="flex flex-wrap p-0 mt-[8px] mx-0 mb-0">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="w-auto h-[32px] flex items-center justify-center text-[#ffffff] py-0 px-[8px] text-[14px] rounded-[5px] mt-0 mr-[8px] mb-[8px] ml-0 list-none bg-[#0052cc]"
              >
                <span className="mt-[3px]">{tag}</span>
                <span className="flex items-center mt-0">
                  <i
                    className="fa-solid fa-xmark ml-[4px] mt-[3px] cursor-pointer text-[15px]"
                    onClick={() => removeTag(index)}
                  />
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Press Space bar to add tags"
            onKeyUp={(e) => (e.key.trim() === "" ? addTags(e) : null)}
            className="flex-1 my-[8px] text[14px] bg-transparent text-white outline-none"
          />
        </div>
        <div className="w-5/6 mx-auto mt-6">
          <Button title="Post a Question" onClick={sendQuestion} />
        </div>
      </form>
    </div>
  );
};

export default AskContainer;
