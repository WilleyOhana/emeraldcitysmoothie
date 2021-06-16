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
                    <div id={`${this.props.name} nutritionfacts`} className="nutrition">
                        <table>
                            <tr>
                                <td>Calories:</td>
                                <td>{this.props.nutrition.calories}</td>
                            </tr>
                            <tr>
                                <td>Total Fat:</td>
                                <td>{this.props.nutrition.totalFat} g</td>
                            </tr>
                            <tr>
                                <td>Saturated Fat:</td>
                                <td>{this.props.nutrition.satFat} g</td>
                            </tr>
                            <tr>
                                <td>Trans Fat:</td>
                                <td>{this.props.nutrition.transFat} g</td>
                            </tr>
                            <tr>
                                <td>Cholesterol:</td>
                                <td>{this.props.nutrition.cholesterol} mg</td>
                            </tr>
                            <tr>
                                <td>Sodium:</td>
                                <td>{this.props.nutrition.sodium} mg</td>
                            </tr>
                            <tr>
                                <td>Total Carbs:</td>
                                <td>{this.props.nutrition.carbs} g</td>
                            </tr>
                            <tr>
                                <td>Dietary Fiber:</td>
                                <td>{this.props.nutrition.fiber} g</td>
                            </tr>
                            <tr>
                                <td>Sugars:</td>
                                <td>{this.props.nutrition.sugar} g</td>
                            </tr>
                            <tr>
                                <td>Protein:</td>
                                <td>{this.props.nutrition.protein} g</td>
                            </tr>
                        </table>
                    </div>
                    <button id={`${this.props.name} toggle`} onClick={() => this.displayNutritionFacts(this.props.name)}>Nutrition Facts</button>
                </div>
                <button onClick={this.props.changeClose}><code>CLOSE</code></button>
            </div>
        )
    }
}

export default NutritionFacts;