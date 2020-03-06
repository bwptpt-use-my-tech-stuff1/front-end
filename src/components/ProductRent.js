import React, { useContext, useEffect } from 'react';
import Navbar from './layout/Navbar';
import RentalCard from './RentalCard';
import TechContext from '../contexts/tech/techContext';

const ProductRent = ({ history, match }) => {
  const { getItem, item } = useContext(TechContext);

  useEffect(() => {
    const id = match.params.id;

    getItem(id);
  }, []);

  return (
    <div>
      <Navbar />
      <RentalCard item={item} />
      <button onClick={() => history.push('/dashboard')}>Go back</button>
      <button>Rent now</button>
    </div>
  );
};

export default ProductRent;
