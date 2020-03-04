import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import TechContext from './techContext';
import techReducer from './techReducer';
import { GET_ITEMS, GET_CATEGORIES, ADD_ITEM } from '../types';

const TechState = ({ children }) => {
  const initialState = {
    items: [],
    categories: []
  };

  const [state, dispatch] = useReducer(techReducer, initialState);

  // Get Items
  const getItems = () => {
    axiosWithAuth()
      .get('/api/protected/rentals')
      .then(res => {
        dispatch({ type: GET_ITEMS, payload: res.data });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  // Get Categories
  const getCategories = () => {
    axiosWithAuth()
      .get('/api/protected/rentals/categories')
      .then(res => dispatch({ type: GET_CATEGORIES, payload: res.data }))
      .catch(err => console.log('err', err));
  };

  // Add Item
  const addItem = item => {
    axiosWithAuth()
      .post('/api/protected/rentals', item)
      .then(res => {
        dispatch({ type: ADD_ITEM, payload: res.data });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <TechContext.Provider
      value={{
        items: state.items,
        categories: state.categories,
        getItems,
        getCategories,
        addItem
      }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechState;
