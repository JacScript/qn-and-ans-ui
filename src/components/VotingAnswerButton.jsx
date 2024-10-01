import axios from "axios";
import React, { useState, useEffect } from "react";

const VotingAnswerButton = ({ questionId, initialvotes, answerId }) => {
  const [userVote, setUserVote] = useState(null);
  const [votes, setVotes] = useState(initialvotes);

  useEffect(() => {
    // Check if the user has already voted (e.g., using local storage or Redux)
    const storedVote = localStorage.getItem(`vote_${answerId}`);
    if (storedVote) {
      setUserVote(storedVote);
    }
  }, [answerId, userVote]);

  const handleVote = async (voteType) => {
    try {
      let newVoteType = voteType;
      
      if (voteType === userVote) {
        // If the user clicks the same vote, it means they want to remove their vote
        newVoteType = null;
      }

      const response = await axios.put(
        "http://localhost:3000/questions/answer/vote",
        {
          aID: answerId,
          qID: questionId,
          vote: newVoteType,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.answer.votes
      // console.log(data)


      setUserVote(newVoteType); // Update state with the new vote type or null for unvoting
      setVotes(data);

      // Update the local storage with the new vote or remove it if null
      if (newVoteType) {
        localStorage.setItem(`vote_${answerId}`, newVoteType);
      } else {
        localStorage.removeItem(`vote_${answerId}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-5 max-md:h-[30px]  h-[48px] flex flex-col justify-center my-1 mr-4">
      <button
           className={`text-center border-solid ${userVote==="up" ? 'border-b-[#d64a17]' : 'border-b-[#888]'}  border-b-8 border-x-transparent max-md:text-[0.2rem] cursor-pointer border-x-8 border-t-0`}
        onClick={() => handleVote("up")}
      />
      <p className="w-5 max-md:text-[8px] max-md:font-[950] text-xs text-center text-[#888]">{votes}</p>
      <button
        className={`border-solid  text-center ${userVote==="down" ? 'border-t-[#d64a17]' : 'border-t-[#888]'}  border-t-8 border-x-transparent cursor-pointer border-x-8 border-b-0`}
        onClick={() => handleVote("down")}      
      />
    </div>
  );
};

export default VotingAnswerButton;
