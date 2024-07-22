import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({type, title}) => {
  return (    
    <button
       className='bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px]  px-[40px] text-sm items-center'
       type={type}>
       {title}
    </button>
  )
}

export default Button