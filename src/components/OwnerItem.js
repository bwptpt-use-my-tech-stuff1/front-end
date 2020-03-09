import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import TechContext from '../contexts/tech/techContext';

const OwnerItem = ({ item, history }) => {
  const { setCurrent, deleteItem, clearCurrent } = useContext(TechContext);
  const { id, title, description, price_per_day, location, image } = item;

  const handleEdit = e => {
    e.preventDefault();
    setCurrent(item);
    history.push('/edit-item');
  };

  const handleDelete = () => {
    deleteItem(id);
    clearCurrent();
  };

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
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default withRouter(OwnerItem);
