import React from 'react';
import './NutritionFacts.css';

import smoothiepic from './the-emerald-nutr-facts.png';

class NutritionFacts extends React.Component {
    render() {
        return (
            <div className={`NutritionFacts ${ this.props.className }`}>
                <button onClick={this.props.changeClose}><code>close X</code></button>
            </div>
        )
    }
}

export default NutritionFacts;