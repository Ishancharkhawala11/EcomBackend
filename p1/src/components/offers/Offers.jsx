import React from 'react'
import "./offer.css"
import exclusive_image from "../assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
        <div className='offer-left'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offer-right'>
            <img src={exclusive_image}></img>
        </div>
    </div>
  )
}

export default Offers