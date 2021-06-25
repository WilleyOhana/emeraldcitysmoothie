import React from 'react';
import './HowToOrder.css';
import { NavLink } from 'react-router-dom';

import smoothies from './smoothieicons.jpg';
import boosters from './boosters.png';

class HowToOrder extends React.Component {
    render() {
        return (
            <div className="HowToOrder">
                <h1>how to order online</h1>
                <div className="order-steps">
                    <div className="step">
                        <h2 className="order-now">Select 'Order Now'</h2>
                        <NavLink to="/order" className="button order">Order Now</NavLink>
                    </div>
                    <div>
                        <i className="arrow"></i>
                    </div>
                    <div className="step">
                        <h2>Select Your Smoothie</h2>
                        <img className="smoothie-img-style" src={smoothies} alt="smoothies"></img>
                    </div>
                    <div>
                        <i className="arrow"></i>
                    </div>
                    <div className="step">
                        <h2>Add Boosters</h2>
                        <img className="booster-img-style" src={boosters} alt="boosters"></img>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default HowToOrder;