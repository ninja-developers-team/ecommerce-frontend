import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography ,IconButton } from '@material-ui/core';



import useStyles from './Styles';
//Functional Component
const Cart = ({ product ,onhandelRemove}) => {
    const classes = useStyles();
    console.log(product.description);



    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="h2">
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
            </CardActions>
            <IconButton aria-label="delete" size="large" onClick={e => onhandelRemove(product)}>
                X
            </IconButton>
        </Card>
    );
};

export default Cart;