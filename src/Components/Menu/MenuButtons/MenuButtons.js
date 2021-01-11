import React from 'react';
import './MenuButtons.css';

class MenuButtons extends React.Component {
    render() {
        return (
            <div className="MenuButtons">
                <button onClick={() => this.props.hideComponent("showComplete")}>Complete Menu</button>
                <button onClick={() => this.props.hideComponent("showGreen")}>Go Green</button>
                <button onClick={() => this.props.hideComponent("showBulk")}>Bulk Me Up</button>
                <button onClick={() => this.props.hideComponent("showNourish")}>Nourish My Body</button>                
                <button onClick={() => this.props.hideComponent("showImmunity")}>Boost My Immune System</button>
                <button onClick={() => this.props.hideComponent("showWeight")}>Help Me Lose Weight</button>
                <button>Acai Bowls</button>
            </div>
        )
    }
}

export default MenuButtons;