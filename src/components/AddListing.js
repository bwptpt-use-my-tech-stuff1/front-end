import React, { useState, useContext, useEffect } from 'react';
import Navbar from './layout/Navbar';
import CategoryOptions from '../components/CategoryOptions';
import TechContext from '../contexts/tech/techContext';

const AddListing = props => {
  const techContext = useContext(TechContext);
  const { addItem, getCategories } = techContext;

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  const [item, setItem] = useState({
    image: '',
    title: '',
    description: '',
    category_id: '',
    checked_out: '',
    price_per_day: '',
    location: ''
  });

  const {
    title,
    description,
    price_per_day,
    checked_out,
    location,
    image
  } = item;

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleCategoryChange = e => {
    setItem({ ...item, category_id: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addItem(item);
    props.history.push('/dashboard');
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2>Add Item</h2>
        <input
          type='text'
          placeholder='Image URL'
          name='image'
          value={image}
          onChange={handleChange}
        />
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
        <select
          value={item.category_id}
          placeholder='Category'
          name='category_id'
          onChange={handleCategoryChange}>
          <option value='' disabled>
            Select Category
          </option>
          <CategoryOptions />
        </select>
        <input
          type='text'
          placeholder='Checked out'
          name='checked_out'
          value={checked_out}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Price per day'
          name='price_per_day'
          value={price_per_day}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Location'
          name='location'
          value={location}
          onChange={handleChange}
        />
        <input type='submit' value='Add Item' />
      </form>
    </div>
  );
};

export default AddListing;
