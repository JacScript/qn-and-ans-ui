import React, { useState } from 'react'
import Axios from "axios"
import { useHistory } from 'react-router-dom'
import Button from "../components/ButtonComponent";


import '../App.css'

const ForgotPassword = () => {
    const history = useHistory();

    const [email, setEmail] = useState('') 


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Reset Activated")
      try {
        await Axios.post("http://localhost:3000/auth/forgotPassword", {
            email,
          })
          .then((response) => {
            if(response.data.status){
                alert('Check your email for reset passowrd link')
              history.push('/')
            }
          });
      } catch (error) {
        console.log(error);
      }
    };



  return (
    <div className='sign-up-container'>
        <form action='POST' className='sign-up-form' >
            <h2 className='font-bold text-center text-2xl mb-4'>Forgot Passoword</h2>
            <input 
            className='py-[8px] bg-[rgba(255,255,255,.1)] mb-[16px] pl-2'
               type='email'
               autoComplete='off'
               placeholder='Email'
               onChange={(e) => setEmail(e.target.value)}
               />

              
               <Button type='submit' onClick={handleSubmit} title='Reset'/>
        </form>
    </div>
  )
}

export default ForgotPassword