import React from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import {  makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { withStyles } from "@material-ui/core/styles";
import SideDrawer from "./drawer/Drawer";



const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: "none",
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(4, 0, 2),
        flexGrow: 1,
        maxWidth: 752,
        minWidth: 600,
    },
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),

    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
            color: 'white'
        },
    },
    
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",

        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));
export default function Navbar({ product }) {
    const { products } = React.useContext(ProductContext);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handlePopoverOpen = (event) => {
        setAnchorEl2(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl2(null);
    };

    const open = Boolean(anchorEl2);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    // const history = useHistory();

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Link to="/detailPage">
                <MenuItem>
                    <IconButton aria-label="show" color="inherit">
                        <Badge >
                            <AssignmentTurnedInIcon />
                        </Badge>
                    </IconButton>
                    <p>Checkout</p>
                </MenuItem>
            </Link>
            <MenuItem>
                <IconButton aria-label="show new notifications" color="inherit">
                    <Badge
                        badgeContent={products?.length ? products.length : 0}
                        color="secondary"
                    >
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Shopping Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <SideDrawer/>
                    </IconButton>
                    
                    <div className={classes.grow} />

                    <Link to="/">
                        <Typography className={classes.title} variant="h5" noWrap>
                            Shopping
                        </Typography>
                    </Link>

                    <div className={classes.grow} />
                    
                    <div className={classes.sectionDesktop}>
                        <Link to="/cartPage">
                            <IconButton aria-label="show 4 new mails" color="#fafafa">
                                <Badge color="secondary">
                                    <AssignmentTurnedInIcon />
                                </Badge>
                            </IconButton>
                        </Link>
                        <IconButton aria-label="cart">
                            <StyledBadge
                                badgeContent={products?.length ? products.length : 0}
                                color="secondary"
                                aria-owns={open ? "mouse-over-popover" : undefined}
                                aria-haspopup="true"
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                            >
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                        <Popover
                            id="mouse-over-popover"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl2}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <div className={classes.root}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h6" className={classes.title}>
                                            Items in your cart
                                        </Typography>
                                        <div className={classes.demo}>
                                            <List dense={dense}>
                                                {products.length ? (
                                                    products?.map((product) => {
                                                        return (
                                                            <ListItem>
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <img
                                                                            src={product.image}
                                                                            alt=""
                                                                            style={{ width: "3rem", height: "3rem" }}
                                                                        />
                                                                    </Avatar>
                                                                </ListItemAvatar>
                                                                <ListItemText
                                                                    primary={product.title}
                                                                    secondary={product.price}
                                                                />
                                                            </ListItem>
                                                        );
                                                    })
                                                ) : (
                                                    <p>You don't have any item in your cart!</p>
                                                )}
                                            </List>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Popover>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}