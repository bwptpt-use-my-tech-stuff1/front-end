import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>Use My Tech Stuff</h2>
      <ul>
        <li>
          <Link to='/dashboard'>Home</Link>
        </li>
        <li>
          <Link to='/add-item'>Add Item</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
