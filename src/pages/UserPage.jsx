import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';

const UserPage = ({match}) => {

    const [userDetails, setUserDetails] = useState("");
    const [votesInfo, setVotesInfo] = useState("")

    const id = match.params.id;


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
    <Header/>
    <div className='px-[30px] py-[20px]'>
    <div><h1 className="text-[1.5rem] text-white">{userDetails && userDetails.username}</h1></div>
    <div>
      <ul className='w-full'>
        {
          votesInfo && votesInfo.map(voteInfo => (
            <li className='bg-[rgba(255,255,255,.1)] pt-[15px] pr-[15px] pb-[15px] w-full mx-auto flex items-center gap-4 border-t-2 border-t-[#555] text-white'>
             <div className='text-right text-xl text-[#bbb]'> {voteInfo.votes} </div>
              <div> {voteInfo.title || voteInfo.questionText} </div>
               </li>
          ))

        }
      </ul>
    </div>
    </div>

    </div>

  )
}

export default UserPage