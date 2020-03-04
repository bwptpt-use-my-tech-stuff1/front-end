import { GET_ITEMS, GET_CATEGORIES, ADD_ITEM } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
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
