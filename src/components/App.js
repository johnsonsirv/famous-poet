import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PoemList from './PoemList';
import Track from './track';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/translate/listen/:id" component={Track} />
          <Route exact path="/" component={PoemList} />
        </Switch>
      </div>
    );
  }
}

export default App;
