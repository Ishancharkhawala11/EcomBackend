import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/nav-logo.svg"
import navProfile from "../../assets/nav-profile.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='Nav-logo'src={navlogo}></img>
        <img src={navProfile} className='navProfile'></img>
    </div>
  )
}

export default Navbar