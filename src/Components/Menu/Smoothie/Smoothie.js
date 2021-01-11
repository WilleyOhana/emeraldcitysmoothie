import React from 'react';
import './Smoothie.css';

class Smoothie extends React.Component {

    listIngredients(ingredients) {
        let list = ingredients.join(", ");

        return list;
    }

    render() {
        return (
            <div className="Smoothie">
                <div className="img-container">
                    <img src={this.props.src} alt={this.props.alt}></img>
                </div>
                <div className="info">
                    <h3>{this.props.alt}</h3>
                    <div className="truncate-overflow">
                        <h4>{this.listIngredients(this.props.ingredients)}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Smoothie;