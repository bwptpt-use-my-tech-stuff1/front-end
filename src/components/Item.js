import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{`${item.price_per_hr}/hr`}</p>
    </div>
  );
};

export default Item;
