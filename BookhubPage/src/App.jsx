import React from 'react';
import NavBar from './components/Navbar';
import Home from './page/Home';
import Bookshelf from './page/Bookshelf';
import Reviews from './page/Reviews';
import ContactUs from './page/ContactUs';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <NavBar />
            <div className='WholePage'> 
            <div id="home">
                <Home />
            </div>
            <div id="bookshelf">
                <Bookshelf />
            </div>
            <div id="reviews">
                <Reviews />
            </div>
            <div id="contact-us">
                <ContactUs />
            </div>
            </div>
            <Footer />
        </>
    );
};

export default App;
