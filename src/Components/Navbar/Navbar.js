import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './ECSCircleLogo.jpg';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar" id="Navbar">
                <Link to="/">
                    <img className="logo" src={logo} alt="Emerald City Smoothie Logo"></img>
                </Link>
                <div className="contents" id="contents">
                    <NavLink to="/" exact className="button">Home</NavLink>
                    <NavLink to="/menu" className="button">Menu</NavLink>
                    <NavLink to="/contact" className="button">Contact</NavLink>
                    <NavLink to="/about" className="button">About</NavLink>
                    <NavLink to="/order" className="button order">Order Now</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;