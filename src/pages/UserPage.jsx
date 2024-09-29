import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

const UserPage = ({match}) => {

    const [userDetails, setUserDetails] = useState("");
    const [votesInfo, setVotesInfo] = useState("");
    const [sumVotes, setSumVotes] = useState("")

    const id = match.params.id;

  const { userInfo } = useSelector((state) => state.auth);



    useEffect(() => {
        const getUserDetails = async () => {
          try {
            const userResponse = await axios.get(
              `http://localhost:3000/users/${id}`,
              { withCredentials: true }
            );
    
            const userData = userResponse.data;
    
            // console.log(userData);
            // console.log(userData.questions);
            setSumVotes(userData.totalVotes)
            setUserDetails(userData.user);  // Set the user data to state
            setVotesInfo(userData.questions)
          } catch (error) {
            console.log(error.message);
          }
        };
    
        getUserDetails();
      }, [id]);  // Dependency array includes id
    

    // useEffect(() => {
    //   const getUserDetails = async () => {
    //     try {
    //       const userResponse = await axios.get(
    //         `http://localhost:3000/users/${id}`,
    //         { withCredentials: true }
    //       );

    //       const userData = userResponse.data;

    //       console.log(userData);
    //       setUserDetails(userData);
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //   };
    //   getUserDetails();
    // }, [id]);




  return (
    <div className="bg-[#393939] w-screen h-screen">
      {!!userInfo && (
         <Helmet>
         <title>User: {userInfo.username} - StackOverCloned</title>
       </Helmet>
      )}
      <Header />
      <div className="px-[30px] py-[20px]">
        <div className='flex justify-between'>
          <div>
            <h1 className="text-[1.5rem] text-white">
              {userDetails && userDetails.username}
            </h1>
            <h1 className="text-[1.5rem] text-white">
              {" "}
              Total Number of Points: {sumVotes}
            </h1>
          </div>
          <div>
            {/* Conditionally render the Edit Profile link if userInfo matches userDetails */}
            {userInfo && userDetails && userInfo.id === userDetails._id && (
              <Link
                to={"/profile"}
                className="bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm"
              >
                Edit Profile
              </Link>
            )}
          </div>
          {/* <div>
            <Link
              to={"/profile"}
              className="bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm"
            >
              Edit Profile
            </Link>
          </div> */}
        </div>
        <div>
          <ul className="w-full">
            {votesInfo &&
              votesInfo.map((voteInfo, idx) => (
                <Link
                  key={idx}
                  to={`/question/${voteInfo._id}`}
                  className="bg-[rgba(255,255,255,.1)] pt-[15px] pr-[15px] pb-[15px] w-full mx-auto flex items-center gap-4 border-t-2 border-t-[#555] text-white"
                >
                  <div className="text-right text-xl text-[#bbb]">
                    {" "}
                    {voteInfo.votes}{" "}
                  </div>
                  <div> {voteInfo.title || voteInfo.questionText} </div>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserPage