import React , {createContext, useState}from 'react'
import Home from './pages/Home.jsx'; 
import { Route, Routes } from 'react-router-dom';
import Ask from './pages/Ask.jsx';
import Login from './pages/Login.jsx';
import Sign from './pages/Sign.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';

import './App.css';
import ResetPassword from './pages/ResetPassword.jsx';

const App = () => {

   const userContext = createContext('');
   const [user, setUser] = useState('');


  return (
    <div className='bg-[#393939] w-screen h-screen'>
    <Routes>
      <userContext.Provider value={{user}}>
      <Route path='/' element={ <Home/>}/>
      <Route path='/ask' element={<Ask/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Sign/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/>} />
      <Route path='/resetPassword/:token' element={<ResetPassword/>} />
      </userContext.Provider>
    </Routes>
    </div>
  )
}

export default App