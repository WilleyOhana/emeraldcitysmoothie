import React from 'react';
import './Navbar.css';
import logo from './ECSCircleLogo.jpg';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar" id="Navbar">
                <a href="#index">
                    <img className="logo" src={logo} alt="Emerald City Smoothie Logo"></img>
                </a>
                <div className="contents" id="contents">
                    <a href="#home" className="button active">Home</a>
                    <a href="#menu" className="button">Menu</a>
                    <a href="#contact" className="button">Contact</a>
                    <a href="#about" className="button">About</a>
                    <a href="#order" className="button order" id="order">Order Now</a>
                </div>
            </div>
        );
    }
}

export default Navbar;