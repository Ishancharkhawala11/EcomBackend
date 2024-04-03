import React, { useContext, useRef, useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/nav_dropdown.png"
const Navbar = () => {
  const [menu,setMenu]= useState("shop")
  const {count}=useContext(ShopContext)
  const menuRef=useRef()
  const d_toggle=(e)=>
  {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')

  }
  return (
 
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
     <img className="nav-dropdown" onClick={d_toggle} src={nav_dropdown}></img>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>setMenu("shop")}><Link to="/" style={{textDecoration:"none" ,color:"black"}}>shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("mens")}><Link to="mens" style={{textDecoration:"none",color:"black"}}>mens</Link>{menu==="mens"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("women")}><Link to="womens"  style={{textDecoration:"none",color:"black"}}>women</Link>{menu==="women"?<hr></hr>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link to="kids"  style={{textDecoration:"none",color:"black"}}>kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
      </ul>
      <div className="login-cart">
      {
        localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>logout</button> : <Link to="/login"> <button>login</button></Link> 
      }
     
       <Link to="/cart"><img src={cart_icon}></img></Link> 
        <div className="nav-cart-count">{count()}</div>
      </div>
    </div>
  );
};

export default Navbar;
