import React, { Children } from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = () => {
  return (
    <Alert variant={variant} >
      <strong>{Children}</strong>
    </Alert>
  )
}

export default ErrorMessage