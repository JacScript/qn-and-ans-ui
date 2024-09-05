import React from 'react'
import Button from './ButtonComponent'

const AnswerComponent = () => {
  return (
    <div className='w-full mx-auto'>
        <div>
        <h1>Your Answer</h1>
        </div>

         <form>
         <textarea
            className=" text-white bg-transparent p-[10px] rounded-[3px] box-border border-2 w-full border-[#777] min-h-[200px]"
            type="text"
            placeholder="Your answer goes here. You can use markdown"
          />
        
          <Button 
          variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  px-[10px] text-xs items-center"
          type="submit"
          title="Post a Question"
           />
        

         </form>
         
    </div>
  )
}

export default AnswerComponent