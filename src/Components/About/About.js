import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <div class="About">
                <div className="about-background-image">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default About;