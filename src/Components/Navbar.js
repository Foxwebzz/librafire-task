import React from 'react';
import '../Styles/Navbar.scss'



function Navbar() {
  return (
    <div className='nav'>
        <a href="/home">home</a>
        <a href="/about">about</a>
        <img src="images/Logo.png" alt="" />
    </div>
  )
}

export default Navbar