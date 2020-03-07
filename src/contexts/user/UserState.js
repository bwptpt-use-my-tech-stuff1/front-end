import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import UserContext from '../user/userContext';
import userReducer from '../user/userReducer';

import { UPDATE_USER, SET_CURRENT } from '../types';

const TechState = ({ children }) => {
  const initialState = {
    user: {
      firstName: 'Sean'
    },
    current: {}
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Set Current User
  const setCurrent = item => {
    dispatch({ type: SET_CURRENT, payload: item });
  };

  // Update Current User
  const updateItem = user => {
    dispatch({ type: UPDATE_USER, payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        current: state.current,
        updateItem,
        setCurrent
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default TechState;
