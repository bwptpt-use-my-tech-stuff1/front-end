import React, { Fragment, useEffect, useContext } from 'react';
import OwnerItem from '../components/OwnerItem';
import TechContext from '../contexts/tech/techContext';

import { v4 as uuidv4 } from 'uuid';

const OwnerListing = () => {
  const { items, getItems } = useContext(TechContext);

  useEffect(() => {
    getItems();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2 className='dashboard-heading'>My Listings</h2>
      <hr />
      <Fragment>
        {items.map(item => (
          <OwnerItem key={uuidv4()} item={item} />
        ))}
      </Fragment>
    </div>
  );
};

export default OwnerListing;
