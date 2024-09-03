import React, { useState } from "react";
import Button from "./ButtonComponent";
import axios from "axios";

const CommentForm = ({
  questionId,
  userId,
  setComments,
  setShowCommentForm,
  comments,
}) => {
  const [memo, setMemo] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleAddComment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/comment",
        {
          memo,
          qID: questionId,
          userId: userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response) {
        const data = response.data.comments;
        setSuccess(true);
        setComments([...comments, data]); // Update comments using parent's function
        setMemo(""); // Clear the input after a successful post
        setShowCommentForm(false);
      } else {
        setError("Error adding comment"); // Set a more generic error message
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCommentChange = (e) => {
    setMemo(e.target.value);
  };

  return (
    <form className="w-4/5 mt-4 ml-24" onSubmit={handleAddComment}>
      <textarea
        onChange={handleCommentChange}
        value={memo}
        rows={3}
        type="text"
        className="bg-[rgba(255,255,255,.1)] border-1 w-full mx-auto p-[2px]  border-[#777] rounded-[5px] block  mb-[10px] text-sm text-[#fff] box-border"
        placeholder="Use comments to ask for more information or suggestion improvemnets. Avoid answering question in comments"
      ></textarea>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && (
        <p className="text-green-500 text-sm">Comment added successfully!</p>
      )}
      <div className="float-right">
        <Button
          // onClick={handleAddComment}
          type="submit"
          title="Add Comment"
          variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  px-[10px] text-xs items-center"
        />
      </div>
    </form>
  );
};

export default CommentForm;
