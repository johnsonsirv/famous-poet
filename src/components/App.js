import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import Spinner from 'react-spinkit';
import PoemList from './PoemList';
import Track from './track';
import Navbar from './common/navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poems: [],
      srcURIs: {},
      loading: true,
    };
  }

  componentDidMount() {
    const dbName = '1_ND_aomrsJvbmphmHtFXI4hvAeMQDnlku1cy1wRZVNs';
    const poemDatabase = firebase
      .database()
      .ref()
      .child(dbName);
    poemDatabase.on('value', snap => {
      const { poems: responseData } = snap.val();
      const poems = this.getStateObjectFromSnapshot(responseData);
      const srcURIs = this.getStorageURIsFromSnapshot(responseData);
      this.setState({ poems, srcURIs });
      this.hideSpinner();
    });
  }

  getStateObjectFromSnapshot = snap => snap.filter(val => val);

  // point object to column in excel

  // Bug: Warning on unmounted compoenents
  // SOlution 1: Use Redux to decouple state
  // Move state up to hierachy - make all network rquest once and set state
  getStorageURIsFromSnapshot = snap => {
    const srcURIs = {};
    snap.map(poem => {
      const { translated, raw } = poem;
      srcURIs[poem.id] = { translated, raw };
    });

    return srcURIs;
  };

  hideSpinner = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    const { poems, srcURIs, loading } = this.state;
    return (
      <>
        <Navbar />
        {loading && poems !== null ? (
          <Spinner
            className="col-md-12 ml-auto mr-auto text-center"
            name="three-bounce"
            color="#000"
            fadeIn="none"
          />
        ) : null}
        <div className="container ml-auto mr-auto">
          <Switch>
            <Route
              path="/translate/listen/:id"
              render={props => <Track src={srcURIs} {...props} />}
            />
            <Route
              exact
              path="/"
              render={props => <PoemList poems={poems} {...props} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
