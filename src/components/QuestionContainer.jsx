import React from 'react'
import QuestionRow from './QuestionRow';

const QuestionContainer = () => {
  return (
    <div>
      <div className='flex justify-between py-[6px] px-[20px] text-white'>
               <h1 className='text-[1.5rem]'>Top Question</h1>
               <button className='bg-[#378ad3] text-[#fff] rounded-[5px] py-[5px] px-[10px] text-sm'>Ask Question</button>
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