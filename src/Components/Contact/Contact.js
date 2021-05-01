import React from 'react';
import './Contact.css';

import Navbar from '../Navbar/Navbar';

import ContactInfo from './ContactInfo/ContactInfo';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm = (e) => {

        const name = e.target[0].value;
        const email = e.target[1].value;
        const message = e.target[2].value;

        const validateEmail = (emailTest) => {
            const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regEx.test(emailTest);
        }

        if(name.length < 1 && name.length > 50) {
            alert("Please enter a valid name.");
            return false;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.")
            return false;
        } else if (message.length < 1) {
            alert("Please enter a message.");
            return false;
        }

        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.validateForm(e)) {

            //Send automated message to customer
            emailjs.sendForm('service_6bv5quk', 'template_62ubyqk', e.target, 'user_0hYTlz6Tj87gdtKnWoQot')
                .then(() => {

                    //Send automated message to store
                    emailjs.sendForm('service_6bv5quk', 'template_c8cwbdb', e.target, 'user_0hYTlz6Tj87gdtKnWoQot')
                        .then(() => {
                            
                            //Clear form data
                            e.target[0].value = '';
                            e.target[1].value = '';
                            e.target[2].value = '';

                            alert('Email sent!');
                        })
                });
        } 
        
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
                            <form id="contact-form" onSubmit={this.handleSubmit}>
                                <input name="to_name" placeholder="Name" ></input>
                                <input name="to_email" placeholder="Email"></input>
                                <textarea name="message" placeholder="Message"></textarea>
                                <input className="submit" type="submit" value="Send"></input>
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