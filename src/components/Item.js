import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import TechContext from '../contexts/tech/techContext';

const Item = ({ item, history }) => {
  const { setCurrent, deleteItem, clearCurrent } = useContext(TechContext);
  const { id, title, description, price_per_day, location } = item;

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
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{`$${price_per_day}/day`}</p>
      <p>{location}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default withRouter(Item);
