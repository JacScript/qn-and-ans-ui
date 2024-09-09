import axios from "axios";
import React, { useState, useEffect } from "react";

const VotingButton = ({ questionId, initialvotes }) => {
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

      const data = response.data.question.votes;

      setUserVote(newVoteType); // Update state with the new vote type or null for unvoting
      setVotes(data);

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
    <div className="">
      <button
        className={`border-0 bg-none text-[1.6em] ${userVote === 'up' ? 'text-[#d64a17]' : 'text-[#888]'} cursor-pointer w-[50px] text-center`}
        onClick={() => handleVote("up")}
      >
        &#9650;
      </button>
      <p className="w-[50px] text-center text-[#888]">{votes}</p>
      <button
        className={`border-0 bg-none text-[1.6em] ${userVote === "down" ? "text-[#d64a17]" : 'text-[#888]'} cursor-pointer w-[50px] text-center`}
        onClick={() => handleVote("down")}
      >
        &#9660;
      </button>
    </div>
  );
};

export default VotingButton;
