import React, { useReducer } from 'react';
import TechContext from './techContext';
import techReducer from './techReducer';

const TechProvider = ({ children }) => {
  const initialState = {
    items: [
      {
        title: 'Canon EOS M5 Mirrorless Digital Camera',
        description:
          '24.2MP APS-C CMOS Sensor, DIGIC Image Processor, 2.36m-Dot EVF, Touch and Drag AF Control, 3.2" 1.62m-Dot Tilting Touchscreen LCD',
        category: 'Camera',
        price_per_hr: '$30',
        price_per_day: '$150'
      }
    ]
  };
  const [state, dispatch] = useReducer(techReducer, initialState);

  return (
    <TechContext.Provider value={{ items: state.items }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
