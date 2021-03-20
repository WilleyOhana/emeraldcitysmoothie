import React from 'react';
import './MenuButtons.css';

import hamburgericon from './hamburger.png';

class MenuButtons extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(thisID) {
        //Handle filtering out the smoothies
        this.props.hideComponent(thisID);

        //Change the active button
        let currActive = document.querySelectorAll(".filter");
        currActive.forEach(elm => {
            elm.classList.remove('filter');
        })

        //Change button pressed to active
        let buttonPressed1 = document.getElementById(thisID + "1");
        let buttonPressed2 = document.getElementById(thisID + "2");
        buttonPressed1.classList.add('filter');
        buttonPressed2.classList.add('filter');

    }

    render() {
        return (
            <div id="MenuButtons" className="MenuButtons">
                <div className="dropdown">
                    <div className="drop-button" onClick={this.displayFilters}>
                        <img src={hamburgericon} alt="filters"></img>
                    </div>
                    <div className="dropdown-content">
                        <button id="showComplete1" className={"filter " + this.props.dim} onClick={() => this.handleClick("showComplete")}>Complete Menu</button>
                        <hr></hr>
                        <button id="showGreen1" className={this.props.dim} onClick={() => this.handleClick("showGreen")}>Go Green</button>
                        <hr></hr>
                        <button id="showBulk1" className={this.props.dim} onClick={() => this.handleClick("showBulk")}>Bulk Me Up</button>
                        <hr></hr>
                        <button id="showNourish1" className={this.props.dim} onClick={() => this.handleClick("showNourish")}>Nourish My Body</button>                
                        <hr></hr>
                        <button id="showImmunity1" className={this.props.dim} onClick={() => this.handleClick("showImmunity")}>Boost My Immune System</button>
                        <hr></hr>
                        <button id="showWeight1" className={this.props.dim} onClick={() => this.handleClick("showWeight")}>Help Me Lose Weight</button>
                        <hr></hr>
                        <button id="showBowls1" className={this.props.dim} onClick={() => this.handleClick("showBowls")}>Acai Bowls</button>
                    </div>
                </div>
                
                <button id="showComplete2" className={"filter " + this.props.dim} onClick={() => this.handleClick("showComplete")}>Complete Menu</button>
                <button id="showGreen2" className={this.props.dim} onClick={() => this.handleClick("showGreen")}>Go Green</button>
                <button id="showBulk2" className={this.props.dim} onClick={() => this.handleClick("showBulk")}>Bulk Me Up</button>
                <button id="showNourish2" className={this.props.dim} onClick={() => this.handleClick("showNourish")}>Nourish My Body</button>                
                <button id="showImmunity2" className={this.props.dim} onClick={() => this.handleClick("showImmunity")}>Boost My Immune System</button>
                <button id="showWeight2" className={this.props.dim} onClick={() => this.handleClick("showWeight")}>Help Me Lose Weight</button>
                <button id="showBowls2" className={this.props.dim} onClick={() => this.handleClick("showBowls")}>Acai Bowls</button>
            </div>
        )
    }
}

export default MenuButtons;