import React, { useState } from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const navigate = useNavigate();

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
              navigate('/')
            }
          });
      } catch (error) {
        console.log(error);
      }
    };



  return (
    <div>
        <form action='POST'  >
            <h2>Forgot Passoword</h2>
            <input 
               type='email'
               autoComplete='off'
               placeholder='Email'
               onChange={(e) => setEmail(e.target.value)}
               />

              
               <button type='submit' onClick={handleSubmit} >Reset</button>
        </form>
    </div>
  )
}

export default ResetPassword