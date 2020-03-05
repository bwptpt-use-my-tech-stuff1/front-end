import React, { useEffect, useContext } from 'react';
import TechContext from '../contexts/tech/techContext';

export const CategoryOptions = () => {
  const techContext = useContext(TechContext);
  const { getCategories, categories } = techContext;

  useEffect(() => {
    getCategories();
    //eslint-disable-next-line
  }, []);

  return categories.map(category => {
    return (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    );
  });
};

export default CategoryOptions;
