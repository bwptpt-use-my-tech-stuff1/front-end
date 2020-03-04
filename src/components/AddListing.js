import React, { useState, useContext, useEffect } from 'react';
import Navbar from './layout/Navbar';
import TechContext from '../contexts/tech/techContext';

const AddListing = props => {
  const techContext = useContext(TechContext);
  const { addItem, getCategories, categories } = techContext;

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);

  const [item, setItem] = useState({
    title: '',
    description: '',
    category_id: '',
    price_hour: '',
    price_day: '',
    location: ''
  });

  const { title, description, price_hour, price_day, location } = item;

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
        <select
          value={item.category_id}
          placeholder='Category'
          name='category_id'
          onChange={handleCategoryChange}>
          {categories.length === 0 ? (
            <option>Loading</option>
          ) : (
            categories.map(category => {
              return (
                <option
                  value={category.id}
                  key={category.id}
                  data-id={category.id}
                  name={category.name}>
                  {category.name}
                </option>
              );
            })
          )}
        </select>
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
        <input
          type='text'
          placeholder='Location'
          name='location'
          value={location}
          onChange={handleChange}
        />
        <input type='submit' />
      </form>
    </div>
  );
};

export default AddListing;
