import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Navbar() {
  
  const[click, setClick] = useState(false)

  const handleclick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
              <Link>TRAVEL <i class="fas fa-binoculars"></i></Link>
              <div className='menu-icon' onClick={handleclick}>
                <i className={click? 'fas fa-times': 'fas fa-bars'}></i>
              </div>
              <ul className={click? 'nav-menu active' : 'nav-menu' }>
                <li className='nav-item'>
                  <Link to='/' 
                  className='nav-item' 
                  onClick={closeMobileMenu}>Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/services' 
                  className='nav-item' 
                  onClick={closeMobileMenu}>Services
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/products' 
                  className='nav-item' 
                  onClick={closeMobileMenu}>Products
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/' 
                  className='nav-links-mobile' 
                  onClick={closeMobileMenu}>Sign Up
                  </Link>
                </li>                            
              </ul>
            </div>
          </nav>
        </>
    )
}

export default Navbar