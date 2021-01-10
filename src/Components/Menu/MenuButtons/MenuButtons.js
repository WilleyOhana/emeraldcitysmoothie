import React from 'react';
import './MenuButtons.css';

class MenuButtons extends React.Component {
    render() {
        return (
            <div className="MenuButtons">
                <button>Complete Menu</button>
                <button>Nourish My Body</button>
                <button>Boost My Immune System</button>
                <button>Help Me Lose Weight</button>
                <button>Bulk Me Up</button>
                <button>Go Green</button>
                <button>Acai Bowls</button>
            </div>
        )
    }
}

export default MenuButtons;