import React from 'react';
import './NutritionFacts.css';

import smoothiepic from './the-emerald-nutr-facts.png';

class NutritionFacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            close: ''
        };

        this.changeClose = this.changeClose.bind(this);
    }

    changeClose() {
        if(this.state.close === '') {
            this.setState({
                close: 'close'
            });
        } else {
            this.setState({
                close: ''
            });
        }
        this.props.unblur();
    }

    render() {
        return (
            <div className={`NutritionFacts ${ this.props.className } ${ this.state.close }`}>
                <button onClick={this.changeClose}><code>close X</code></button>
            </div>
        )
    }
}

export default NutritionFacts;