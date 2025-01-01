import React from 'react';
import Logo from "../assets/logoB.png"

const NavBar = () => (
    <nav className='navbar'>
        <ul> 
            <img src={Logo} alt="LogoPic" className="logo_img" />
            <li><a href="#home">Book Hub 03</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#bookshelf">Bookshelf</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
        </ul>
    </nav>
);

export default NavBar;