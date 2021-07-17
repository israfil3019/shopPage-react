import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";

import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ProductContext } from "../context/ProductContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: 500,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    maxWidth: 800,
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(3),
  },
  cover: {
    width: 400,
    height: 500,
  },
  buttons: {
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
}));

export default function DetailPage(props) {
  const classes = useStyles();
  const product = props.location.product;

  const { addProduct } = React.useContext(ProductContext);

  const addToCart = () => {
    addProduct(product);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {product?.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Category: {product?.category}
            <br/>
            Price: ${product?.price}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product?.description}
          </Typography>
        </CardContent>
        <div className={classes.buttons}>
        <Button
          onClick={addToCart}
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to Cart
        </Button>
        </div>
      </div>
      <CardMedia className={classes.cover} image={product?.image} />
    </Card>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// import { ProductContext } from "../context/ProductContext";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: '35%',
//     margin: 'auto'

//   },
//   media: {
//     height: '30rem',
//     display: 'block',
//     objectFit: 'cover',
//     margin: '20px',
//     width: 'auto',
//   },
// });

// export default function DetailPage(props) {

// const product = props.location.product;
// const classes = useStyles();

// const { addProduct } = React.useContext(ProductContext);

// const addToCart = () => {
//   addProduct(product);
// };

//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={product?.image}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {product?.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {product?.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Category: {product?.category}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Price: ${product?.price}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
      // <CardActions>
        // <Button
        //   onClick={addToCart}
        //   variant="contained"
        //   color="primary"
        //   className={classes.button}
        //   startIcon={<AddShoppingCartIcon />}
        // >
        //   Add to Cart
        // </Button>

      // </CardActions>
//     </Card>
//   );
// }
