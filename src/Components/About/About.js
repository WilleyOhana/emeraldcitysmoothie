import React from 'react';
import './About.css';

import Navbar from '../Navbar/Navbar';

import familyphoto from './family-photo.jpg';

class Contact extends React.Component {
    render() {
        return (
            <div class="About">
                <div className="about-background-image">
                    <Navbar />
                    <div className="container">
                        <span>About Us</span>
                        <hr></hr>
                        <div className="family-contents">
                            <img src={familyphoto} alt="Family"></img>
                            <p>
                                <h2>The Samms</h2>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;