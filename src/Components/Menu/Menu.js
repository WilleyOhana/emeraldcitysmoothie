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
        this.unblur = this.unblur.bind(this);
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

    unblur() {
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
                    <div className="left-decor"></div>
                    <div className="right-decor"></div>
                    <Navbar />

                    <MenuDisplay 
                        blurBackground={this.blurBackground} 
                        unblur={this.unblur}
                        dim={this.state.blurred}
                    />
                </div>
            </div>
        )
    }
}

export default Menu;