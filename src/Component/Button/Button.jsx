import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ to, children }) => {
  return (
    <Link to={to} className="layout-links-container">
      {children}
    </Link>
  )
}

export default Button
