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

    displayNutritionFacts(smoothieName) {
        if(document.getElementById(`${smoothieName} ingredients`).style.display === "none") {
            document.getElementById(`${smoothieName} ingredients`).style.display = "block";
            document.getElementById(`${smoothieName} nutritionfacts`).style.display = "none";
            document.getElementById(`${smoothieName} toggle`).innerHTML = "Nutrition Facts";
        } else {
            document.getElementById(`${smoothieName} ingredients`).style.display = "none";
            document.getElementById(`${smoothieName} nutritionfacts`).style.display = "block";
            document.getElementById(`${smoothieName} toggle`).innerHTML = "Ingredients";
        }
    }

    render() {
        return (
            <div className={`NutritionFacts ${ this.props.className }`}>
                <div className="contents">
                    <div id={`${this.props.name} ingredients`} className="ingredients">
                        <h1>{this.props.name}</h1>
                        <hr></hr>
                        <h2>Ingredients:</h2>
                        <p>{this.listIngredients(this.props.ingredients)}</p>
                        {this.listAttributes(this.props.ingredients[this.props.ingredients.length - 1])}
                    </div>
                    <img id={`${this.props.name} nutritionfacts`} src={this.props.nutrition} alt="nutrition facts"></img>
                    <button id={`${this.props.name} toggle`} onClick={() => this.displayNutritionFacts(this.props.name)}>Nutrition Facts</button>
                </div>
                <button onClick={this.props.changeClose}><code>CLOSE</code></button>
            </div>
        )
    }
}

export default NutritionFacts;