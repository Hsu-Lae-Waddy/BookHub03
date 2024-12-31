import React from "react";
import { Outlet } from 'react-router-dom'
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../page/Home";

function RootLayout(){
    return(
        <div>
             <NavBar />
             <div className="container">
               <Outlet />
             </div>
             <Footer></Footer>
        </div>
    );
}

export default RootLayout 