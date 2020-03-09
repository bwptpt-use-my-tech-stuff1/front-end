import React, { useContext } from 'react';
import Navbar from './layout/Navbar';
import UserContext from '../contexts/user/userContext';
import OwnerListing from './OwnerListing';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      <h2>
        Hi, I'm {user.firstName} {user.lastName}
      </h2>
      <img src={user.image} alt='profile' />
      <OwnerListing />
    </div>
  );
};

export default Profile;
