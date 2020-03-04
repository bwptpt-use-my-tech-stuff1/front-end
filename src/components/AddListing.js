import React, { useState, useContext } from 'react';
import Navbar from './layout/Navbar';
import TechContext from '../contexts/tech/techContext';

const AddListing = props => {
  const techContext = useContext(TechContext);
  const { addItem } = techContext;

  const [item, setItem] = useState({
    title: '',
    description: '',
    category_id: '',
    price_hour: '',
    price_day: ''
  });

  const { title, description, category_id, price_hour, price_day } = item;

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addItem(item);
    props.history.push('/dashboard');
  };

  return (
    <div>
      <Navbar />
      <h2>New Listing</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Description'
          name='description'
          value={description}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Category'
          name='category_id'
          value={category_id}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Price per hour'
          name='price_hour'
          value={price_hour}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Price per day'
          name='price_day'
          value={price_day}
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddListing;
