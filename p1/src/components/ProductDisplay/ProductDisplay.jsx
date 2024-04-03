import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png"
import { ShopContext } from "../../context/ShopContext";
const ProductDisplay = ({product}) => {
  const {addToCart}=useContext(ShopContext)
  return (
    <div className="ProductDisplay">
      <div className="product-left">
        <div className="product-img-list">
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image}></img>
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="productdislay-right-star">
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_icon}></img>
            <img src={star_dull_icon}></img>
            <p>122</p>
        </div>
        <div className="right-prices">
            <div className="old-price">${product.old_price}</div>
            <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum sem eu ligula tincidunt, ac lacinia neque suscipit. Mauris euismod dui id turpis congue, et dapibus arcu volutpat. Donec at aliquam purus. Phasellus rutrum nisl ut velit convallis dignissim. Nullam fringilla euismod metus, sed bibendum libero mollis et. Vivamus a est vel risus iaculis efficitur eget vitae libero.
        </div>
        <div className="right-size">
            <h1>select size</h1> 
            <div className="right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{
          addToCart(product.id)
        }}>ADD TO CART</button>
        <p className="right-category"><span>Category:</span>Women ,T-shirt, Crop Top</p>
        <p className="right-category"><span>Tags:</span>Modern,latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
