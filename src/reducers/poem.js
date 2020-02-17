import { FETCH_POEM } from '../actions';

const poem = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POEM:
      return action.payload.poems[action.id];
    default:
      return state;
  }
};

export default poem;
