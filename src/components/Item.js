import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{`${item.price_hour}/hr`}</p>
    </div>
  );
};

export default Item;
