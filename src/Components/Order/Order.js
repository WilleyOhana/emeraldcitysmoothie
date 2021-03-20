import React from 'react';
import './Order.css';
import Navbar from '../Navbar/Navbar';

import vikingfoodspic from './vikingfoods.png';
import doordashpic from './doordash.jpg';

class Order extends React.Component {
    render() {
        return (
            <div className="Order">
                <Navbar />

                <div className="temp-contents">
                    <span>Online ordering coming soon!</span>
                    <br></br>
                    <br></br>
                    <span>For now, feel free to order through our third party delivery services:</span>
                    <br></br>
                    <br></br>
                    <a href="https://www.ordervikingfood.com/r/1580/restaurants/delivery/Smoothies-Cafe/Emerald-City-Smoothie-Bellingham">
                        <img src={vikingfoodspic} alt="Viking Foods"></img>
                    </a>
                    <a href="https://www.doordash.com/store/emerald-city-smoothie-bellingham-970293/">
                        <img src={doordashpic} alt="Viking Foods"></img>
                    </a>
                </div>
            </div>
        )
    }
}

export default Order;