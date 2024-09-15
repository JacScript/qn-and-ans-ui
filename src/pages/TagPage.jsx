import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Button from "../components/ButtonComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import QuestionRow from "../components/QuestionRow";

const TagPage = ({match}) => {
  const [following, setFollowing] = useState(false);
  const [questions, setQuestions] = useState(null);



  const { userInfo } = useSelector((state) => state.auth);
  
  const handlefollow = async () => {

    try {
      const response = await axios.post(
        "http://localhost:3000/tag/follow",
        {
          name: match.params.name,
          userId: userInfo.id,
        },
        { withCredentials: true }
      );
      setFollowing(true);
      console.log(response.data); // Log the response data to the console
    } catch (error) {
      console.error(error); // Log the error to the console
    }
  };

 // Handle unfollow logic
 const handleUnfollow = async () => {
  console.log("Clicked")
  try {
    const response = await axios.delete(
      "http://localhost:3000/tag/unfollow",
      {
        data: {
          name: match.params.name,
          userId: userInfo.id,
        },
        withCredentials: true,
      }
    );
    console.log(response.data); // Log the response data to the console
    setFollowing(false);
    // console.log(response.data); // Log the response data to the console
  } catch (error) {
    console.error("Error unfollowing the tag", error); // Log the error to the console
  }
};



  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tag/"+match.params.name, {
          withCrendetials: true,
        });
        const data = response.data.questions;
        setQuestions(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    // Check if the user is already following the tag
    const checkIfFollowing = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/tags/check-following",
          {
            name: match.params.name,
            userId: userInfo.id,
          },
          { withCredentials: true }
        );
        console.log(response.data)
      //  setFollowing(response.data.isFollowing); // Assuming the response contains `isFollowing`
      } catch (error) {
        console.error("Error checking follow status", error);
      }
    };

    fetchQuestions();
    checkIfFollowing(); // Check if the tag is already followed
  }, [match.params.name, userInfo.id]);


  


    return(
        <div  className='bg-[#393939] w-screen h-screen'>
            <Header/>
            <div className="flex justify-between py-[px] px-[20px] text-white my-6">
        <h1 className="text-[1.5rem]">{match.params.name}</h1>
        <div>


        { !following ? (
          <Button
          variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-1 flex align-middle px-[10px] text-sm flex justify-center items-center"
          onClick={handlefollow}
          type="submit"
          title="Follow"
       /> 
        ) : (<Button
        variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-1 flex align-middle px-[10px] text-sm flex justify-center items-center"
        onClick={handleUnfollow}
        type="submit"
        title="UnFollow"
     />)
          
        }

       
        </div>
           </div>
           {questions &&
        questions.map((question) => (
          <QuestionRow
            key={question._id}
            title={question.title}
            id={question._id}
            tags={question.tags.map((tag) => ({
              key: tag._id,  // Extract tag ID
              name: tag.name // Extract tag name
            }))} 
            age={question.createdAt}
            username={question.user.username} // Extract username
          />
        ))}
        </div>
    )
}


export default TagPage;
