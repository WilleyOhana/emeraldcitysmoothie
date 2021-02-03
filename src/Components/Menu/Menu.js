import React from 'react';
import './Menu.css';

import Navbar from '../Navbar/Navbar';
import MenuDisplay from './MenuDisplay/MenuDisplay';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blurred: ''
        };

        this.blurBackground = this.blurBackground.bind(this);
    }

    blurBackground() {
        if(this.state.blurred === '') {
            this.setState({
                blurred: 'blurred'
            });
        } else {
            this.setState({
                blurred: ''
            });
        }
    }

    render() {
        return (
            <div className={`Menu ${this.state.blurred}`}>
                <div className="menu-background-image">
                    <Navbar />

                    <MenuDisplay blurBackground={this.blurBackground} />
                </div>
            </div>
        )
    }
}

export default Menu;