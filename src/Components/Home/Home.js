import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar.js';
import Title from './Title/Title.js';
import HowToOrder from './HowToOrder/HowToOrder.js';
import FavoritesSection from './FavoritesSection/FavoritesSection.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapDisplaying: false
    }

    this.openMap = this.openMap.bind(this);
    this.closeMap = this.closeMap.bind(this);
  }

  openMap() {
    this.setState({
      mapDisplaying: true
    })
  }

  closeMap() {
    this.setState({
      mapDisplaying: false
    })
  }

  render() {
    return (
      <div className="Home">
          {this.state.mapDisplaying && 
            <div className="grayscreen">
              <div className="close-button" onClick={this.closeMap}>Close</div>
            </div>
          }
          <div id="home-screen" className="home-background-image">
            <Navbar />
            <Title openMap={this.openMap} mapDisplaying={this.state.mapDisplaying}/>
          </div>

        <HowToOrder />

        <FavoritesSection />
      </div>
    );
  }
}

export default Home;
