import React from 'react';
import './App.css';

import Navbar from '../Navbar/Navbar.js';
import Title from '../Title/Title.js';
import HowToOrder from '../HowToOrder/HowToOrder.js';
import FavoritesSection from '../FavoritesSection/FavoritesSection.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="background-image">
          <Navbar />
          <Title />
        </div>

        <HowToOrder />

        <FavoritesSection />
      </div>
    );
  }
}

export default App;
