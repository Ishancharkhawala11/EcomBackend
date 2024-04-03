import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
const CartItem = () => {
  const {getTotalCardAmount,all_product, cart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="CartItem">
      <div className="formet-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr></hr>
      {all_product.map((e) => {
        if (cart[e.id] > 0) {
          return (
            <>
            <div className="formet formet-main">
              <img src={e.image} className="icon" ></img>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="quantity">{cart[e.id]}</button>
              <p>${cart[e.id]*e.new_price}</p>
              <img className="remove" src={remove_icon} onClick={()=>{removeFromCart(e.id)}}></img>
          </div> <hr></hr> 
          </>
          );
        }
       
        return null;
      })}
      <div className="down">
        <div className="total">
          <h1>cart Totals</h1>
          <div>
            <div className="total-items">
              <p>Subtotal</p>
              <p>${getTotalCardAmount()}</p>
            </div>
            <hr></hr>
            <div className="total-items">
            <p>Shipping Fees</p>
              <p>free</p>
            </div>
            <hr></hr>
            <div className="total-items">
              <h3>Total</h3>
              <h3>${getTotalCardAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode" >
          <p>if you have promo code ,enter it here</p>
          <div className="box">
            <input type="text" placeholder="promo code"></input>
            <button>submit</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default CartItem;
