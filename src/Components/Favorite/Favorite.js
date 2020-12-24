import React from 'react';
import './Favorite.css';

class Favorite extends React.Component {

    listIngredients(ingredients) {
        let list = ingredients.map(ingredient => {
            return <ul>{ingredient}</ul>;
        });

        return list;
    }

    render() {
        return (
            <div className="Favorite">
                <div className="img-container">
                    <img src={this.props.src} alt={this.props.name}></img>
                </div>
                <div className="info">
                    <h2>{this.props.name}</h2>
                    <p className="description">{this.props.description}</p>
                    <h4>Ingredients</h4>
                    {this.listIngredients(this.props.ingredients)}
                </div>
            </div>
        );
    }
}

export default Favorite;