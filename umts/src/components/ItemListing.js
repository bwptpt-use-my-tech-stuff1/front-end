import React, { useContext } from 'react';
import Item from '../components/Item';

import { techContext } from '../contexts/techContext';
import uuid from 'react-uuid';

const ItemListing = () => {
  const { items } = useContext(techContext);
  return (
    <div>
      {items.map(item => (
        <Item key={uuid()} item={item} />
      ))}
    </div>
  );
};

export default ItemListing;
