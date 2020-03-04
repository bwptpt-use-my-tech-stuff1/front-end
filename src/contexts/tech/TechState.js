import React, { useReducer } from 'react';
import TechContext from './techContext';
import techReducer from './techReducer';
import { v4 as uuidv4 } from 'uuid';
import { ADD_ITEM } from '../types';

const TechProvider = ({ children }) => {
  const initialState = {
    items: [
      {
        title: 'Canon EOS M5 Mirrorless Digital Camera',
        description:
          '24.2MP APS-C CMOS Sensor, DIGIC Image Processor, 2.36m-Dot EVF, Touch and Drag AF Control, 3.2" 1.62m-Dot Tilting Touchscreen LCD',
        category_id: 'Camera',
        price_hour: '$30',
        price_day: '$150'
      }
    ]
  };
  const [state, dispatch] = useReducer(techReducer, initialState);

  // Add Item
  const addItem = item => {
    item.id = uuidv4();
    dispatch({ type: ADD_ITEM, payload: item });
  };

  return (
    <TechContext.Provider value={{ items: state.items, addItem }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
