import React, { useState, useEffect } from "react";

const VotingButton = () => {
  const [userVote, setUserVote] = useState("");

  const handleVote = async (aID, voteType) => {
    try {
      const response = await axios.put(
        "http://localhost:3000//question/answer/vote",
        {
          qID,
          aID,
          vote: voteType,
        }
      );

      if (!response.ok) {
        throw new Error(`Error voting for answer: ${response.statusText}`);
      }

      const data = await response.json();
      setUserVote(voteType); // Update state with the voted type ("up" or "down")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        className="border-0 bg-none text-[2em]  text-[#888] cursor-pointer w-[50px] text-center"
        onClick={() => handleVote(aID, "up")}
      >
        &#9650;
        {/* {userVote === 'up' ? 'Upvoted' : 'Upvote'} */}
      </button>
      <div className="w-[50px] text-center text-[#888]">0</div>
      <button
        className="border-0 bg-none text-[2em]  text-[#888] cursor-pointer w-[50px] text-center"
        onClick={() => handleVote(aID, "down")}
      >
        &#9660;
      </button>
    </div>
  );
};

export default VotingButton;
