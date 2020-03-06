import {
  GET_ITEMS,
  GET_ITEM,
  GET_CATEGORIES,
  ADD_ITEM,
  UPDATE_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_ITEM
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.payload
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

    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.payload.id ? action.payload : item;
        })
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
