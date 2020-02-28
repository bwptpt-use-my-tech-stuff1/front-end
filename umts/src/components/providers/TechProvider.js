import React, { useState } from 'react';
import { itemData } from '../../data';
import { techContext } from '../../contexts/techContext';

const TechProvider = ({ children }) => {
  const [items, setItems] = useState(itemData);

  return (
    <techContext.Provider value={{ items, setItems }}>
      {children}
    </techContext.Provider>
  );
};

export default TechProvider;
