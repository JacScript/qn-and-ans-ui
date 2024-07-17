import React from 'react'

const QuestionRow = () => {
  return (
    <div className=''>
      <div className="bg-[rgba(255,255,255,.1)] py-[5px] px-[20px] flex space-x-5 border-t-2 border-t-[#555]">
        <div className="flex flex-col text-center text-[white] ">
          <span className="text-[1.2rem] ">0</span>
          <span className="font-[700] text-[0.9rem] mt-[1px]">votes</span>
        </div>
        <div className="flex flex-col text-center text-[white]">
          <span className="text-[1.2rem] ">4</span>
          <span className="font-[700] text-[0.9rem] mt-[1px]">answers</span>
        </div>
        <div className="flex flex-col text-center text-[white]">
          <span className="text-[1.2rem] ">9</span>
          <span className="font-[700] text-[0.9rem] mt-[1px]">views</span>
        </div>
        <div className="px-[30px] flex flex-col w-full">
          <a href="#" className="text-[#3ca4ff] text-[1.1rem] mb-[2px]">
            Getting a String in Quotes in JavaScript
          </a>
          <div className='flex justify-between'>
            <div className='flex'>
              <span className="text-[#9cc3db] bg-[#3e4a52] p-[4px] rounded-[4px] text-[.9rem] mr-[6px]">
                Javascript
              </span>
              <span className="text-[#9cc3db] bg-[#3e4a52] p-[4px] rounded-[4px] text-[.9rem] mr-[6px]">
                Parsing
              </span>
              <span className="text-[#9cc3db] bg-[#3e4a52] p-[4px] rounded-[4px] text-[.9rem] mr-[6px]">
                Quotes
              </span>
              <span className="text-[#9cc3db] bg-[#3e4a52] p-[4px] rounded-[4px] text-[.9rem] mr-[6px]">
                Literals
              </span>
            </div>
            <div className='float-right'>
                 <p><span className='text-[.8rem]'>asked 2 min Ago </span><a className='text-[#3ca4ff]' href=''>Jackson</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionRow