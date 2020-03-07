import React from 'react';
import Navbar from './layout/Navbar';
import ItemListing from '../components/ItemListing';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <h2 className='dashboard-heading'>Discover Products</h2>
      <hr />
      <ItemListing />
    </div>
  );
};

export default Dashboard;
