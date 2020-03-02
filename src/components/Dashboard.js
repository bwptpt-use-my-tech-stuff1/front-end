import React from 'react';
import Navbar from './layout/Navbar';
import ItemListing from '../components/ItemListing';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h2>Discover Products</h2>
      <ItemListing />
    </div>
  );
};

export default Dashboard;
