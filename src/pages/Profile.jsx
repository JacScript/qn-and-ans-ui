import React from 'react'
import Header from '../components/Header'
import Button from '../components/ButtonComponent'
import { useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/authSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

// import { useHistory } from 'react-router-dom'

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        history.push('/');
      } catch (err) {
        console.error(err);
      }
    };



  return (
    <div className="bg-[#393939] w-screen h-screen">
      <Header/>
      < div className='px-[30px] py-[20px]'>


      <h1 className="text-[1.5rem]">Profile</h1>

      <div className='w-32'>
      <Button title="LogOut" onClick={logoutHandler} className="bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm"/>
      </div>
    
      </div>
    </div>
  )
}

export default Profile