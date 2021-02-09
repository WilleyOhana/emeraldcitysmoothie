import React from 'react';
import './NutritionFacts.css';

class NutritionFacts extends React.Component {

    listIngredients(ingredients) {
        let i = 0;
        let returnString = ""
        
        while(i < ingredients.length - 1) {
            returnString += ingredients[i] + ", ";
            i++;
        }

        returnString += ingredients[ingredients.length - 1].split("*")[0];

        return returnString;
    }

    listAttributes(ingredient) {
        let attributesArr = [];

        if(ingredient.includes("*Gluten Free")) {
            attributesArr.push("Gluten Free");
        }
        
        if (ingredient.includes("*Vegan")) {
            attributesArr.push("Vegan");
        }
        
        if (ingredient.includes("*Can be made vegan by request")) {
            attributesArr.push("Can be made vegan by request");
        }

        const attributes = attributesArr.map(attribute => {
            return <li key={attribute}>{attribute}</li>;
        });

        return (
            <ul>{attributes}</ul>
        );
    }

    render() {
        return (
            <div className={`NutritionFacts ${ this.props.className }`}>
                <div className="contents">
                    <div className="ingredients">
                        <h1>{this.props.name}</h1>
                        <hr></hr>
                        <h2>Ingredients:</h2>
                        <p>{this.listIngredients(this.props.ingredients)}</p>
                        {this.listAttributes(this.props.ingredients[this.props.ingredients.length - 1])}
                    </div>
                    <img src={this.props.nutrition} alt="nutrition facts"></img>
                </div>
                <button onClick={this.props.changeClose}><code>CLOSE</code></button>
            </div>
        )
    }
}

export default NutritionFacts;