import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({type, title}) => {
  return (    
    <button
    //    to={`${path}`}
       className='bg-[#378ad3] text-[#fff] rounded-[5px] py-[8px] flex align-middle px-[10px] text-sm'
    //    className={`${variant}`}
       type={type}>
       {title}
    </button>
  )
}

export default Button