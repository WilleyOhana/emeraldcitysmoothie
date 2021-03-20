import React from 'react';
import './Contact.css';

import Navbar from '../Navbar/Navbar';

import ContactInfo from './ContactInfo/ContactInfo';

class Contact extends React.Component {

    submit = () => {
        let form = document.getElementById('form');

        alert("Still building this functionality. Please try again on a later date. If you need to get in touch, please email us at ecs.bellingham@gmail.com");

        form.innerHTML = "<h2>Thank you for your submission. We will get back to you as soon as we can!</h2>";
    }

    render() {
        return (
            <div className="Contact">
                <div className="contact-background-image">
                    <Navbar />
                    <div className="container">
                        <span>Contact Us</span>
                        <hr></hr>
                        <h2>We'd {"\u2661"} to help!</h2>
                        <p>We want to serve you as best as possible, so let us know if you have any questions!</p>
                        <div className="contact-info-container">
                            <form id="form" onSubmit={this.submit}>
                                <input type="name" id="name" name="name" placeholder="Name"></input>
                                <input placeholder="Email"></input>
                                <textarea placeholder="Message"></textarea>
                                <input type="submit"></input>
                            </form>
                            <ContactInfo />
                            
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;