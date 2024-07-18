import React from 'react'
import Header from '../components/Header.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import { useLocation,useNavigate } from 'react-router-dom';

const Home = () => {
   const location = useLocation();

   console.log(`${location.state.id}`);

  return (
    <div className=''  >
        <Header />
        <QuestionContainer/>
    </div>
  )
}

export default Home