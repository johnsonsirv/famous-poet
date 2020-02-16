import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import SideNavbar from './sideNavbar';
import PoemList from '../containers/PoemList';
import Track from '../containers/track';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Root-Container">
        <Navbar />
        <SideNavbar />
        <div className="App">
          <Switch>
            <Route path="/translate/listen/:id/:media" component={Track} />
            <Route exact path="/" component={PoemList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
