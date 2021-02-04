import React from 'react';
import './NutritionFacts.css';

import smoothiepic from './the-emerald-nutr-facts.png';

class NutritionFacts extends React.Component {

    listIngredients(ingredients) {
        let list = ingredients.join(", ");

        return list;
    }

    render() {
        return (
            <div className={`NutritionFacts ${ this.props.className }`}>
                <div className="contents">
                    <div className="ingredients">
                        <h1>{this.props.name}</h1>
                        <h2>Ingredients:</h2>
                        <p>{this.listIngredients(this.props.ingredients)}</p>
                    </div>
                    <img src={smoothiepic} alt="nutrition facts"></img>
                </div>
                <button onClick={this.props.changeClose}><code>CLOSE</code></button>
            </div>
        )
    }
}

export default NutritionFacts;