import React from 'react';
import './Title.css';

class Title extends React.Component {
    render() {
        return (
            <div className="Title">
                <div className="ecs-title">
                    <h1>Emerald City Smoothie</h1>
                </div>
                <div className="ecs-description">
                    <h2>Bellingham location at 1058 Lakeway Dr. -- in the Whole Foods parking lot</h2>
                </div>
            </div>
        );
    }
}

export default Title;