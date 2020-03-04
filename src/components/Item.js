import React from 'react';

const Item = ({ item }) => {
  const { title, price_hour } = item;
  return (
    <div>
      <h2>{title}</h2>
      <p>{`${price_hour}/hr`}</p>
    </div>
  );
};

export default Item;
