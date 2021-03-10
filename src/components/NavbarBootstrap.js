import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './NavbarBootstrap.css'

 function NavbarBootstrap() {
    let menuOpen = false
    const mybtn = document.querySelector('.navbar-toggler-icon')


    if(mybtn){
    mybtn.addEventListener('click', () => {
        
        if(!menuOpen){
            menuOpen = true
            alert(menuOpen)                     
            mybtn.classList.remove('mystyle');
        } else {
            menuOpen = false                
            alert(menuOpen)
            mybtn.classList.add('mystyle');
        }
    })
}
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Brand href="/" className='navbrand'>
                TRAVEL <i className="fas fa-binoculars"></i>
                </Navbar.Brand>  
                <Navbar.Toggle aria-controls="responsive-navbar-nav" id='myid'  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarBootstrap;