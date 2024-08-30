import axios from "axios";
import React, { useState, useEffect } from "react";

const VotingButton = ({ questionId, initialvotes }) => {
  const [userVote, setUserVote] = useState("");
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
      const response = await axios.put(
        "http://localhost:3000/question/vote",
        {
          qID: questionId,
          vote: voteType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if (!response.ok) {
      //   throw new Error(`Error voting for answer: ${response.statusText}`);
      // }
      const data = await response.data.question;

      setUserVote(voteType); // Update state with the voted type ("up" or "down")
      setVotes(data.votes);

      // Store the vote in local storage (optional)
      localStorage.setItem(`vote_${questionId}`, voteType);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="">
      <button
        className={`border-0 bg-none text-[1.6em] ${userVote === 'up' ? 'text-[#d64a17]' : 'text-[#888]'} cursor-pointer w-[50px] text-center`}
        onClick={() => handleVote("up")}
        disabled={userVote}
      >
        &#9650;
      </button>
      <p className="w-[50px] text-center text-[#888]">{votes}</p>
      <button
        className={`border-0 bg-none text-[1.6em] ${userVote === "down" ? "text-[#d64a17]" : 'text-[#888]'} cursor-pointer w-[50px] text-center`}
        onClick={() => handleVote("down")}
        disabled={userVote}
      >
        &#9660;
      </button>
    </div>
  );
};

export default VotingButton;
