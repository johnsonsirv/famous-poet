import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/sass/main.scss';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
