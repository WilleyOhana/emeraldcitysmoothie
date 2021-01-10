import React from 'react';
import './Contact.css';

import Navbar from '../Navbar/Navbar';

class Contact extends React.Component {
    render() {
        return (
            <div class="Contact">
                <div className="contact-background-image">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Contact;