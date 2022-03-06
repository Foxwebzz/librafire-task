import React from 'react';
import '../Styles/Navbar.scss'



function Navbar() {
  return (
    <div className='navigation-section'>
        <div className="container">
            <ul className='nav-ul'>
            <img className='logo-img' src="images/Logo.png" alt="" />
                <li>
                    <a href="/assortiman">Assortiment</a>
                    <a href="/Vestigingen">Vestigingen</a>
                    <a href="/Installateursnetwerk">Installateursnetwerk</a>
                </li>
            </ul>

            <div className="right-nav">
                <img src="images/lupa.svg" alt="" />
                <img src="images/shopping-cart.svg" alt="" />
                <img src="images/person.svg" alt="" />
                <img className='angle-down' src="images/angle-down.svg" alt="" />
                <img className='hamburger-btn' src="images/hamburger.svg" alt="" />
                <button className="nav-btn">Maak een afspraak</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar