import React from 'react'
import Header from '../components/Header.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import { useLocation,useNavigate } from 'react-router-dom';

const Home = () => {
   const location = useLocation();

  return (
    <div>
        <Header />
        <QuestionContainer/>
    </div>
  )
}

export default Home