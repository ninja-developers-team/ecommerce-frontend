import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';


import useStyles from './Styles';

//Functional Component
const Product = ({ product, addToCart }) => {
  const classes = useStyles();
  console.log(product.description);

  return (
    <Card className={classes.root} >
      <CardMedia className={classes.media} image={product.image} title={product.title} />
      <CardContent >
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            ${product.price}
          </Typography>
        </div>
        <Typography  variant="body2" color="textSecondary" component="p" >
              {product.description}
            </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
           <form>
               <input type="hidden" value={product.title}/>
               <input type="hidden" value={product.image}/>
               <input type="hidden" value={product.price}/>
               <input type="hidden" value={product.description}/>



          </form>
        <IconButton aria-label="Add to Cart" >
          <AddShoppingCart onClick={e =>addToCart(product)} />
        </IconButton>
        
      </CardActions>
    </Card>
  );
};

export default Product;