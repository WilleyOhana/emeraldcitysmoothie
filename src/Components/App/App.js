import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home/Home';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Order from '../Order/Order';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router basename={"/emeraldcitysmoothie"}>
          <Switch>
            <Route path="/" exact component = {() => <Home />} />
            <Route path="/menu" exact component = {() => <Menu />} />
            <Route path="/contact" exact component = {() => <Contact />} />
            <Route path="/about" exact component = {() => <About />} />
            <Route path="/order" exact component = {() => <Order />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
