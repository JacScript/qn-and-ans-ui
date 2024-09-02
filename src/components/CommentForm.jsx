import React from 'react';
import Button from './ButtonComponent';

const CommentForm = () => {
    return (
      <form className='w-4/5 mt-4 ml-24'>
        <textarea rows={3} className='bg-[rgba(255,255,255,.1)] border-1 w-full mx-auto p-[2px]  border-[#777] rounded-[5px] block  mb-[10px] text-sm text-[#fff] box-border' placeholder='Use comments to ask for more information or suggestion improvemnets. Avoid answering question in comments'></textarea>
        <div className='float-right'>
        <Button title="Add Comment" variant="bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  px-[10px] text-xs items-center"/>
        </div>
      </form>
    )
}

export default CommentForm;