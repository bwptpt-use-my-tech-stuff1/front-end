import React, { useReducer } from 'react';
import UserContext from '../user/userContext';
import userReducer from '../user/userReducer';

import { UPDATE_USER, SET_CURRENT } from '../types';

const TechState = ({ children }) => {
  const initialState = {
    user: {
      firstName: 'Sean',
      lastName: 'Birmingham',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEGrKkcru6n8A/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=WlYjI4Ob-wfQNSQxY1Bj1ReYhC8_8GUkBbeU1mst2TY'
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
