import React from 'react'
import "./RelatedProduct.css"
import data_product from "../assets/data"
import Item from "../item/Item"
const RelatedProduct = () => {
  return (
    <div className='RelatedProduct'>
      <h1>Related Products</h1>
      <hr></hr>
      <div className='items'>
           {data_product.map((item,i)=>
           {
            return  <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
           })}
      </div>
    </div>
  )
}

export default RelatedProduct