import axios from "axios";
import React, { useState, useEffect } from "react";

const VotingAnswerButton = ({ questionId, initialvotes }) => {
  const [userVote, setUserVote] = useState(null);
  const [votes, setVotes] = useState(initialvotes);

  useEffect(() => {
    // Check if the user has already voted (e.g., using local storage or Redux)
    const storedVote = localStorage.getItem(`vote_${questionId}`);
    if (storedVote) {
      setUserVote(storedVote);
    }
  }, [questionId]);

  const handleVote = async (voteType) => {
    try {
      let newVoteType = voteType;
      
      if (voteType === userVote) {
        // If the user clicks the same vote, it means they want to remove their vote
        newVoteType = null;
      }

      const response = await axios.put(
        "http://localhost:3000/question/vote",
        {
          qID: questionId,
          vote: newVoteType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.question;

      setUserVote(newVoteType); // Update state with the new vote type or null for unvoting
      setVotes(data.votes);

      // Update the local storage with the new vote or remove it if null
      if (newVoteType) {
        localStorage.setItem(`vote_${questionId}`, newVoteType);
      } else {
        localStorage.removeItem(`vote_${questionId}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-5 h-[48px] flex flex-col justify-center mr-4">
      <button
        // className={`border-0 bg-none text-[1.6em] ${userVote === 'up' ? 'text-[#d64a17]' : 'text-[#888]'} cursor-pointer w-[50px] text-center`}
        className="border-solid border-b-black border-b-8 border-x-transparent border-x-8 border-t-0"
        onClick={() => handleVote("up")}
      />
      <p className="w-5 text-xs text-center text-[#888]">0</p>
      <button
        // className={`border-0 bg-none text-[1.6em] ${userVote === "down" ? "text-[#d64a17]" : 'text-[#888]'} cursor-pointer w-[50px] text-center`}
        className="border-solid border-t-black border-t-8 border-x-transparent border-x-8 border-b-0"
        onClick={() => handleVote("down")}
      
/>
    </div>
  );
};

export default VotingAnswerButton;
