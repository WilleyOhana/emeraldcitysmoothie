import React from 'react';
import './Menu.css';

import Navbar from '../Navbar/Navbar';
import MenuButtons from './MenuButtons/MenuButtons';
import MenuDisplay from './MenuDisplay/MenuDisplay';

class Menu extends React.Component {
    render() {
        return (
            <div className="Menu">
                <div className="menu-background-image">
                    <Navbar />

                    <MenuDisplay />
                </div>
            </div>
        )
    }
}

export default Menu;