import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import TechContext from './techContext';
import techReducer from './techReducer';

import {
  GET_ITEMS,
  GET_ITEM,
  GET_CATEGORIES,
  ADD_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  DELETE_ITEM
} from '../types';

const TechState = ({ children }) => {
  const initialState = {
    items: [],
    item: {},
    categories: [],
    current: null
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

  // Get Item
  const getItem = id => {
    axiosWithAuth()
      .get(`/api/protected/rentals/${id}`)
      .then(res => {
        dispatch({ type: GET_ITEM, payload: res.data });
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

  // Set Current Item
  const setCurrent = item => {
    dispatch({ type: SET_CURRENT, payload: item });
  };

  // Clear Current Item
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Current Item
  const updateItem = item => {
    axiosWithAuth()
      .put(`/api/protected/rentals/${item.id}`, item)
      .then(res => {
        dispatch({ type: UPDATE_ITEM, payload: res.data });
      });
  };

  // Delete Item
  const deleteItem = id => {
    axiosWithAuth()
      .delete(`/api/protected/rentals/${id}`)
      .then(() => {
        dispatch({ type: DELETE_ITEM, payload: id });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  return (
    <TechContext.Provider
      value={{
        items: state.items,
        item: state.item,
        categories: state.categories,
        current: state.current,
        getItems,
        getItem,
        getCategories,
        addItem,
        setCurrent,
        clearCurrent,
        updateItem,
        deleteItem
      }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechState;
