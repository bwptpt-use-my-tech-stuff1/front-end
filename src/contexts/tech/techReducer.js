import { GET_ITEMS, ADD_ITEM } from '../types';

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};
