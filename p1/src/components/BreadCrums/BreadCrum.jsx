import React from 'react'
import "./BreadCrum.css"
import arrow_icon from "../assets/breadcrum_arrow.png"
const BreadCrum = ({product}) => {
    // const {product}=props;
  return (
    <div className='breadCrum'>
        HOME <img src={arrow_icon}></img> SHOP <img src={arrow_icon}></img> {product.category} <img src={arrow_icon}></img> {product.name}
    </div>
  )
}

export default BreadCrum