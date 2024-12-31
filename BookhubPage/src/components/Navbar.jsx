import React from "react";
import Logo from '../assets/LogoB.png';
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
      <div className="navbar">
        <ul>
          <img src={Logo} alt="LogoPic" className="logo_img" />
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/Bookshelf" className={({ isActive }) => (isActive ? "active" : "")}>
            <li>Bookshelf</li>
          </NavLink>
          <NavLink to="/Reviews" className={({ isActive }) => (isActive ? "active" : "")}>
            <li>Reviews</li>
          </NavLink>
          <NavLink to="/Downloads" className={({ isActive }) => (isActive ? "active" : "")}>
            <li>Downloads</li>
          </NavLink>
          <NavLink to="/ContactUs" className={({ isActive }) => (isActive ? "active" : "")}>
            <li>Contact Us</li>
          </NavLink>
          <button>Get Started</button>
        </ul>
      </div>
    );
  }
export default NavBar  