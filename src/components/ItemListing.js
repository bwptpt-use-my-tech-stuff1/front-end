import React, { useEffect, useContext } from 'react';
import ItemCard from './ItemCard';

import TechContext from '../contexts/tech/techContext';
import { v4 as uuidv4 } from 'uuid';

const ItemListing = () => {
  const { items, getItems } = useContext(TechContext);

  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {items.map(item => (
        <ItemCard key={uuidv4()} item={item} />
      ))}
    </div>
  );
};

export default ItemListing;
