import React from 'react'
import { data } from '../../API/API'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      {data.map((Shoe) => (
        <Link to={`${Shoe.id}`}>{Shoe.productName}</Link>
      ))}

      <Outlet />
    </div>
  )
}

export default Product
