import React from 'react'
import Header from '../components/Header.jsx';
import QuestionContainer from '../components/QuestionContainer.jsx';
import { useLocation } from 'react-router-dom';


const Home = () => {
   const location = useLocation();

  //  useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if(userInfo) {
  //     navigate("/");
  //   }
  // }, [history])

  return (
    <div className='bg-[#393939] w-screen h-screen'>
        <Header />
        <QuestionContainer/>
    </div>
  )
}

export default Home