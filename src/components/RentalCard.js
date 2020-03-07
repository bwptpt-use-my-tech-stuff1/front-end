import React from 'react';

const RentalCard = ({ item }) => {
  const { title, description, price_per_day, location, image } = item;
  return (
    <div>
      <img src={image} alt='' />

      <h2>{title}</h2>
      <p>{`$${price_per_day}/day`}</p>
      <p>
        <strong>Description</strong>: {description}
      </p>
      <p>
        <strong>Located</strong>: {location}
      </p>
    </div>
  );
};

export default RentalCard;
