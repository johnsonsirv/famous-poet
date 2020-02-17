import { FETCH_POEMS } from '../actions';

const poems = (state = [], action) => {
  switch (action.type) {
    case FETCH_POEMS:
      return action.payload.poems.filter(val => val);
    default:
      return state;
  }
};

export default poems;
