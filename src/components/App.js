import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Navbar from './common/navbar';
import PoemList from './PoemList';
import Track from './track';

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
        <Navbar />
        {loading ? (
          <Spinner
            className="col-md-12 ml-auto mr-auto text-center"
            name="three-bounce"
            color="#000"
            fadeIn="none"
          />
        ) : null}
        <div className="container ml-auto mr-auto">
          <Switch>
            <Route path="/translate/listen/:id" component={Track} />
            <Route exact path="/" component={PoemList} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
