import React from 'react'
import './Navbar.css'
import logo from '../Images/WhatsApp Image 2024-12-12 at 12.20.52 AM.jpeg'
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <input type='search' placeholder='search item...' className='search'/>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-regular fa-user"></i>
      <i class="fa-solid fa-gear"></i>
    </div>
  )
}

export default Navbar
