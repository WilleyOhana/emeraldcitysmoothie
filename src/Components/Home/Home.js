import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar.js';
import Title from './Title/Title.js';
import HowToOrder from './HowToOrder/HowToOrder.js';
import FavoritesSection from './FavoritesSection/FavoritesSection.js';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
          <div id="home-screen" className="home-background-image">
            <Navbar />
            <Title />
          </div>

        <HowToOrder />

        <FavoritesSection />
      </div>
    );
  }
}

export default Home;
