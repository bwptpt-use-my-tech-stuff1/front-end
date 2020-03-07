import React, { useState, useContext } from 'react';
import Navbar from './layout/Navbar';
import UserContext from '../contexts/user/userContext';

const Profile = () => {
  const { current, user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <h2>Hi, I'm {user.firstName}</h2>
    </div>
  );
};

export default Profile;
