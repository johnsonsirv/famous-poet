import { combineReducers } from 'redux';
import poems from './poems';
import poem from './poem';
import translatedMedia from './translated';

const rootReducer = combineReducers({
  poems,
  translatedMedia,
  poem,
});

export default rootReducer;
