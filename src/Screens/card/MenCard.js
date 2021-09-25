import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from '../style';
const MenCard = ({ menItem }) => {
  const classes = useStyles();
  console.log(menItem.description);

  const [like, increseLike] = useState(0);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={menItem.image} title={menItem.title} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {menItem.title}
          </Typography>
      
          <Typography gutterBottom variant="body2" component="h2">
            ${menItem.price}
          </Typography>
        </div>
        <Typography  variant="body2" color="textSecondary" component="p" >
              {menItem.description}
            </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={() => increseLike(like + 1)} aria-label="Add to Cart" >
        💝 {like}
        </IconButton>
      </CardActions>
         
      <Typography gutterBottom variant="h5" component="h2">
            {menItem.rating.rate}
          </Typography>

    </Card>
  );
};

export default MenCard;