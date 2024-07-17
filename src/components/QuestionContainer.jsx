import React from 'react'
import QuestionRow from './QuestionRow';
import { Link } from 'react-router-dom';
import Ask from '../pages/Ask';

const QuestionContainer = () => {
  return (
    <div>
      <div className='flex justify-between py-[px] px-[20px] text-white my-6'>
               <h1 className='text-[1.5rem]'>Top Question</h1>
               <Link to={'/Ask'} className='bg-[#378ad3] text-[#fff] rounded-[5px] pt-[8px] flex align-middle px-[10px] text-sm'>Ask Question</Link>
      </div>

      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>

    </div>
  )
}

export default QuestionContainer;