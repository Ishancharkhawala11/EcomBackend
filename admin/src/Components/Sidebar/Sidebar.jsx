import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
import add_product_icon from "../../assets/Product_Cart.svg"
import list_product_icon from "../../assets/Product_list_icon.svg"
const Sidebar = () => {
  return (
    <div className='sidebar'>
       <Link to={"/addProduct"}style={{textDecoration:"none"}}>
        <div className='sidebar__item'>
            <img src={add_product_icon}></img>
            <p>Add Product</p>
        </div>
       </Link>
       <Link to={"/ListProduct"}style={{textDecoration:"none"}}>
        <div className='sidebar__item'>
            <img src={list_product_icon}></img>
            <p>Product list</p>
        </div>
       </Link>
    </div>
  )
}

export default Sidebar