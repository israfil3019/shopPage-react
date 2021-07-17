import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"; 
import { Paper } from "@material-ui/core";
import { ProductContext } from "../context/ProductContext";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(45),
    },
    height: 600,
  },
  media: {
    height: 420,
  },
}));


export default function ProductCard({ product }) {
  const classes = useStyles();
  const { addProduct } = React.useContext(ProductContext);

  const history = useHistory();
  const viewDetails = () => {
    history.push({
      pathname: "/detailPage",
      product: product,
    });
  };
  useEffect(() => {}, []);
  const addToCart = () => {
    addProduct(product);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
    <Card className={classes.root} >
      <CardActionArea onClick={viewDetails}>
        <CardMedia
          className={classes.media}
          image={product?.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {product?.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <IconButton
          to="/DetailPage"
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon onClick={addToCart} />
        </IconButton>
        </Button>
        <Button size="small" color="primary" onClick={viewDetails} variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Paper>
  );
}
