import React from "react";
import Logo from '../assets/LogoB.png';
import { NavLink} from "react-router-dom";


function NavBar(){

    return(
        <div className="navbar">
            <img src={Logo} alt="LogoPic" className="logo_img"></img>
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/Bookshelf'> <li>Bookshelf</li></NavLink>
                <NavLink to='/Reviews'> <li>Reviews</li></NavLink>
                <NavLink to='/Downloads'> <li>Downloads</li></NavLink>
                <NavLink to='/ContactUs'><li>Contact Us</li></NavLink>
            </ul>
            <button>Get Started</button>
        </div>
    );
}

export default NavBar