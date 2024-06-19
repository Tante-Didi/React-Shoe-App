import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../API/API'

import './Shoe.css'
import Button from '../Button/Button'

const Shoe = () => {
  let { id } = useParams() //Extracting the 'id' parameter from the URL
  const Shoe = data.find((product) => product.id == id)

  return (
    <>
      {Shoe ? (
        <div className="container-Shoe">
          <div>{Shoe.productName}</div>
          <img src={Shoe.Img} className="img-size" />
        </div>
      ) : (
        <div>No Shoe</div>
      )}
      <Button to={'/product'}>Back</Button>
    </>
  )
}

export default Shoe
