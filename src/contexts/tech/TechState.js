import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import TechContext from './techContext';
import techReducer from './techReducer';
import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM } from '../types';

const TechState = ({ children }) => {
  const initialState = {
    items: []
  };

  const [state, dispatch] = useReducer(techReducer, initialState);

  // Get Items
  const getItems = async () => {
    await axiosWithAuth()
      .get('/api/protected/rentals')
      .then(res => {
        console.log('response', res.data);
        dispatch({ type: GET_ITEMS, payload: res.data });
      })
      .catch(err => {
        console.log('error', err);
      });
  };

  // Add Item
  const addItem = item => {
    item.id = uuidv4();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  return (
    <TechContext.Provider value={{ items: state.items, getItems, addItem }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechState;
