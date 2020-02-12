import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Navbar from './navbar';
import SideNavbar from './sideNavbar';
import PoemList from '../containers/PoemList';
import Track from '../containers/track';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.hideSpinner();
  }

  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <div className="Root-Container">
          <Navbar />
          <SideNavbar />
          {loading ? (
            <Spinner
              className="col-md-12 ml-auto mr-auto text-center"
              name="three-bounce"
              color="#fff"
              fadeIn="none"
            />
          ) : null}
          <div className="App">
            <Switch>
              <Route path="/translate/listen/:id" component={Track} />
              <Route exact path="/" component={PoemList} />
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default App;
