import React from "react";
import Logo from '../assets/LogoB.png';
import { Link } from "react-router-dom";
function NavBar(){
    return(
        <div className="navbar">
            <img src={Logo} alt="LogoPic" className="logo_img"></img>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/Bookshelf'> <li>Bookshelf</li></Link>
                <Link to='/Reviews'> <li>Reviews</li></Link>
                <Link to='/Downloads'> <li>Downloads</li></Link>
                <Link to='/ContactUs'><li>Contact Us</li></Link>
            </ul>
            <button>Get Started</button>

        </div>
    );
}

export default NavBar