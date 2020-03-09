import React from 'react';
import { withRouter, Link } from 'react-router-dom';
const ItemCard = ({ item }) => {
  const { title, description, price_per_day, location, image } = item;

  return (
    <div>
      <Link to={`/rentals/${item.id}`}>
        <img src={image} alt='' />
      </Link>

      <h2>{title}</h2>
      <p>{description}</p>
      <p>{`$${price_per_day}/day`}</p>
      <p>{location}</p>
    </div>
  );
};

export default withRouter(ItemCard);
