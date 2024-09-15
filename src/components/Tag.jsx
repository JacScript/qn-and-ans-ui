import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({name, variant,id}) => {
  return (
    <Link to={'/tag/'+name} key={id} className={variant}>{name}</Link>
  )
}

export default Tag