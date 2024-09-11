import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

const Tag = ({name, variant,key}) => {
  return (
    <Link to={'/tag/'+name} key={key} className={variant}>{name}</Link>
  )
}

export default Tag