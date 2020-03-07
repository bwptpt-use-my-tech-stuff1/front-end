import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import TechContext from '../contexts/tech/techContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

const ItemCard = ({ item, history }) => {
  const classes = useStyles();
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
    <Card className={classes.root}>
      <Link to={`/rentals/${item.id}`}>
        <CardMedia component='img' height='140' image={image} />
      </Link>

      <h2>{title}</h2>
      <p>{description}</p>
      <p>{`$${price_per_day}/day`}</p>
      <p>{location}</p>

      {/* <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button> */}
    </Card>
  );
};

export default withRouter(ItemCard);
