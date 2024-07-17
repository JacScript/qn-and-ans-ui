import React from 'react'
import Home from './pages/Home.jsx'; 
import { Route, Routes } from 'react-router-dom';
import Ask from './pages/Ask.jsx';

import './App.css';

const App = () => {
  return (
    <div className='bg-[#393939] w-screen h-screen'>
    <Routes>
    {/* <div className='bg-[#393939] w-screen h-screen'> */}
      <Route path='/' element={ <Home/>}/>
      <Route path='/ask' element={<Ask/>} />
    {/* </div> */}
    </Routes>
    </div>
  )
}

export default App