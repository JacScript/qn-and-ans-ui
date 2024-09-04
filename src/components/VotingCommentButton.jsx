import axios from "axios";
import React, { useEffect, useState } from "react";



const VotingCommentButton = ({commentID, initialvotes}) => {
  const [userVote, setUserVote] = useState("");
   const [votes, setVotes] = useState(initialvotes);

   useEffect(() => {
    const storedVote = localStorage.getItem(`vote_${commentID}`);
    if (storedVote) {
      setUserVote(storedVote);
    }
   }, [commentID]);

   const handleVote = async (voteType) => {
    try {
      const response = await axios.put(
        "http://localhost:3000/comments/vote",
        {
          commentID: commentID,
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
      const data = await response.data.comment;

      setUserVote(voteType); // Update state with the voted type ("up" or "down")
      setVotes(data.votes);

      // Store the vote in local storage (optional)
      localStorage.setItem(`vote_${commentID}`, voteType);
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <div className="flex h-full  w-full mr-2">
   <div className="w-1/2 h-full flex justify-center items-center text-center">
         <button
        disabled={userVote}
        onClick={() => handleVote("up")}
        className={`text-center border-solid ${userVote==="up" ? 'border-b-[#d64a17]' : 'border-b-[#888]'}  border-b-8 border-x-transparent cursor-pointer border-x-8 border-t-0`}
        role="button"
      />
      
   </div>
   
     {
        votes > 0 && (
            <div className="flex justify-between items-center w-1/2 text-[.9em] ml-1">{votes}</div>
        )
     }
      {/* <div className="flex justify-between items-center w-1/2 text-[.9em] ml-1">{votes}</div> */}
    </div>
  );
};

export default VotingCommentButton;
