import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen '>
        <Spinner className='w-screen h-screen bg-white' animation='border' />
    </div>
  )
}

export default Loading