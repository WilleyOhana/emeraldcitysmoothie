import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

import hamburgericon from './hamburger.png';
import logo from './ECSCircleLogo.jpg';

class Navbar extends React.Component {

    displayDropdown() {
        let Navbar = document.getElementById('Navbar');

        if(Navbar.classList.contains('responsive')) {
            Navbar.classList.remove('responsive');
        } else {
            Navbar.classList.add('responsive');
        }

        let dropdownContents = document.getElementById('responsive-contents');
        
        if(dropdownContents.classList.contains('off')) {
            dropdownContents.classList.remove('off');
            dropdownContents.classList.add('on');
        } else {
            dropdownContents.classList.remove('on');
            dropdownContents.classList.add('off');
        }
    }

    render() {
        return (
            <div className="Navbar" id="Navbar">
                <Link to="/">
                    <img className="logo" src={logo} alt="Emerald City Smoothie Logo"></img>
                </Link>
                <div className="contents">
                    <NavLink to="/" exact className="button">Home</NavLink>
                    <NavLink to="/menu" className="button">Menu</NavLink>
                    <NavLink to="/contact" className="button">Contact</NavLink>
                    <NavLink to="/about" className="button">About</NavLink>
                    <img id="dropdown" className="hamburger" src={hamburgericon} alt="menu" onClick={this.displayDropdown}></img>
                    <NavLink to="/order" className="button order">Order Now</NavLink>
                </div>
                <div id="responsive-contents" className="responsive-contents off">
                    <NavLink to="/" exact className="button">Home</NavLink>
                    <hr></hr>
                    <NavLink to="/menu" className="button">Menu</NavLink>
                    <hr></hr>
                    <NavLink to="/contact" className="button">Contact</NavLink>
                    <hr></hr>
                    <NavLink to="/about" className="button">About</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;