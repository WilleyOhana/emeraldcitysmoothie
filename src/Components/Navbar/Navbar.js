import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './ECSCircleLogo.jpg';

class Navbar extends React.Component {

    displayMenu() {
        let navbar = document.getElementById('Navbar');

        if(navbar.className === "Navbar") {
            navbar.className += " responsive";
        } else {
            navbar.className = "Navbar";
        }
    }

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
                    <a href="javascript:void(0);" class="icon" onclick={this.displayMenu}>
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;