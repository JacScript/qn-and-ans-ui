import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';

const UserPage = ({match}) => {

    const [userDetails, setUserDetails] = useState("");

    const id = match.params.id;


    useEffect(() => {
        const getUserDetails = async () => {
          try {
            const userResponse = await axios.get(
              `http://localhost:3000/users/${id}`,
              { withCredentials: true }
            );
    
            const userData = userResponse.data;
    
            console.log(userData);
            setUserDetails(userData);  // Set the user data to state
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
    <h1 className="text-[1.5rem] text-white">{userDetails && userDetails.username}</h1>

    </div>

    </div>

  )
}

export default UserPage