import { combineReducers } from 'redux';
import poems from './poems';
import translated from './translated';

const rootReducer = combineReducers({
  poems,
  translated,
});

export default rootReducer;
