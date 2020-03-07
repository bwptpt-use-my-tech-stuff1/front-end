import { UPDATE_USER, SET_CURRENT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: state.user.id === action.payload.id ? action.payload : state.user
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};
