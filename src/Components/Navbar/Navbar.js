import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

import hamburgericon from './hamburger.png';
import logo from './ECSCircleLogo.jpg';

class Navbar extends React.Component {

    displayDropdown() {

        //Make dropdown contents disappear or appear
        let dropdownContents = document.getElementById('responsive-contents');
        let homeScreen = document.getElementById('home-screen');

        if(dropdownContents.classList.contains('off')) {
            dropdownContents.classList.remove('off');
            dropdownContents.classList.add('on');
            if(homeScreen) homeScreen.style.minHeight = "800px";
        } else {
            dropdownContents.classList.remove('on');
            dropdownContents.classList.add('off');
            if(homeScreen) homeScreen.style.minHeight = "600px";
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
                    <img id="dropdown" className="hamburger" src={hamburgericon} alt="menu" onClick={this.displayDropdown}></img>
                    <NavLink to="/order" className="button order">Order Now</NavLink>
                </div>
                <div id="responsive-contents" className="responsive-contents off">
                    <NavLink to="/" exact className="button">Home</NavLink>
                    <hr></hr>
                    <NavLink to="/menu" className="button">Menu</NavLink>
                    <hr></hr>
                    <NavLink to="/contact" className="button">Contact</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;