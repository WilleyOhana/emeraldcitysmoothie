import React from 'react';
import './ContactInfo.css';

import mappinicon from './map-pin-icon.png';
import telephoneicon from './telephone-icon.png';
import emailicon from './email-icon.png';
import facebookicon from './facebook-icon.png';
import instagramicon from './instagram-icon.png';

class ContactInfo extends React.Component {
    render () {
        return (
            <div className="ContactInfo">
                <div className="contact-section">
                    <img className="icon" src={mappinicon} alt="map-pin-icon"></img>
                    <div className="contact-text">
                        Emerald City Smoothie
                        <br></br>
                        1058 Lakeway Dr., Bellingham WA
                    </div>
                </div>
                <div className="contact-section">
                    <img className="icon" src={telephoneicon} alt="telephone-icon"></img>
                    <div className="contact-text">
                        360 - 647 - 2357
                    </div>
                </div>
                <div className="contact-section">
                    <img className="icon" src={emailicon} alt="email-icon"></img>
                    <div className="contact-text">
                        ecs.bellingham @ gmail.com
                    </div>
                </div>
                <hr></hr>
                <a href="https://www.facebook.com/ecsbellingham">
                    <img className="social-icon" src={facebookicon} alt="facebook-icon"></img>
                </a>
                <a href="https://www.instagram.com/emeraldcitybellingham/">
                    <img className="social-icon" src={instagramicon} alt="instagram-icon"></img>
                </a>
            </div>
        )
    }
}

export default ContactInfo;