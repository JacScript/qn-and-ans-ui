import React from 'react'
import Home from './pages/Home.jsx'; 
import { Route, Routes } from 'react-router-dom';
import Ask from './pages/Ask.jsx';
import Login from './pages/Login.jsx';
import Sign from './pages/Sign.jsx';

import './App.css';

const App = () => {
  return (
    <div className='bg-[#393939] w-screen h-screen'>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='/ask' element={<Ask/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/sign' element={<Sign/>} />
    </Routes>
    </div>
  )
}

export default App