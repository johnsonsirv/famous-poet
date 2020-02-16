import { GET_STORAGE_URI } from '../actions';

const translatedMedia = (state = {}, action) => {
  switch (action.type) {
    case GET_STORAGE_URI:
      return action.payload;
    default:
      return state;
  }
};

export default translatedMedia;
