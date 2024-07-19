import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await Axios.post("http://localhost:3000/auth/forgetPassword", {
            email,
          })
          .then((response) => {
            if(response.data.status){
                alert('Check your email for reset passowrd link')
              navigate('/')
            }
          });
      } catch (error) {
        console.log(error);
      }
    };



  return (
    <div>
        <form action='POST'  onSubmit={handleSubmit}>
            <h2>Forgot Passoword</h2>
            <input 
               type='email'
               autoComplete='off'
               placeholder='Email'
               onChange={(e) => setEmail(e.target.value)}
               />

              
               <button type='submit' >Reset</button>
        </form>
    </div>
  )
}

export default ForgotPassword