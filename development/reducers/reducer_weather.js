import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Cannot manipulate state, must return new array instead
      // return state.concat([action.payload.data]); // This is equivalent of the bottom
      return [ action.payload.data, ...state];
  }


  return state;
}
