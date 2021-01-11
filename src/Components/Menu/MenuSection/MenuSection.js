import React from 'react';
import './MenuSection.css';

import Smoothie from '../Smoothie/Smoothie';

class MenuSection extends React.Component {

    renderSmoothies(smoothiesArray) {
        const smoothies = smoothiesArray.map(smoothie => {
            return <Smoothie 
                        src={smoothie.src}
                        alt={smoothie.alt}
                        ingredients={smoothie.ingredients}
                        price={smoothie.price}
                    />
        });

        return smoothies;
    }

    render() {
        return (
            <div className="MenuSection">
                <div className="section-name">{this.props.name}</div>
                <div className="SmoothiesContainer">
                    {this.renderSmoothies(this.props.smoothies)}
                </div>
                <hr></hr>
            </div>
        )
    }
}

export default MenuSection;