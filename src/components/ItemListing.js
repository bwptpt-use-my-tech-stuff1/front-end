import React, { useContext } from 'react';
import Item from '../components/Item';

import TechContext from '../contexts/tech/techContext';
import uuid from 'react-uuid';

const ItemListing = () => {
  const { items } = useContext(TechContext);
  return (
    <div>
      {items.map(item => (
        <Item key={uuid()} item={item} />
      ))}
    </div>
  );
};

export default ItemListing;
