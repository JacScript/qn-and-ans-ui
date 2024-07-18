import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Sign = () => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const submitHandler = async (e) => {
          e.preventDefault();

        try {

            await axios.post('http://localhost:3000/sign', {
                email, password
            }).then((response) => {
                if(response.data = 'Exist'){
                     alert("User is already exist")
                } else if(response.data = "Not - Exist"){
                    history('/'), {state:{id: email}}
                }
            });
            
        } catch (error) {
            console.log(error);
        }
     }


  return (
    <div>

        <h1>Sign Up</h1>


        <form action='POST'>
             <input type='email' onChange={e => setEmail(e.target.value)} placeholder='email' id='' name=''/>
             <input type='password' onChange={e => setPassword(e.target.value)} placeholder='password' id='' name=''/>

             <input type="submit" onClick={submitHandler}/>
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to='/login'>LOGIN PAGE</Link>
    </div>
  )
}

export default Sign