import React from 'react';
import './Smoothie.css';

class Smoothie extends React.Component {

    listIngredients(ingredients) {
        let list = ingredients.join(", ");

        return list;
    }

    listPrices(prices) {
        let pricesString = "";
        if(prices.length === 1) {
            pricesString = "32oz. $7.75"
        } else {
            pricesString = "24oz. $" + prices[0].toPrecision(3) + " / 32oz. $" + prices[1].toPrecision(3);
        }

        return pricesString;
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
                    <div className="prices">
                        {this.listPrices(this.props.price)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Smoothie;