import React from 'react'
import TopNavBar from './TopNavBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import json from '../Products.json';
import { connect } from "react-redux";
import { grey } from '@mui/material/colors';

function Products(props) {

    // reset local storage when page reloaded.  
    // let cart = [];
    // localStorage.setItem("cart", JSON.stringify(cart));

    // local storage will not get reset but the cart in navbar will get reset making 
    // the logic not valid. 
    // to solve this we will need to initilize the redux store wil local storage.
    // if (localStorage.getItem("cart") === null) {
    //     let cart = [];
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }

    return (
        <div>
            <Box
                component="main"
                sx={{
                    backgroundColor: grey[100],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <TopNavBar pagename="Products" />
                <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid >
                            <Typography gutterBottom variant="h3" component="div">
                                Products
                            </Typography>
                        </Grid>
                        <Grid >
                            <Button variant="contained" color="error" onClick={() => props.clearcart()}>
                                Clear Cart <DeleteIcon />
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        {/* product items */}
                        {json.Products.map(product =>
                            <Grid item key={product.id} xs={12} md={4} lg={3}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        alt="product image"
                                        height="310"
                                        image={product.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.pname}
                                        </Typography>
                                        <Typography variant="p" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                        <Typography variant="p" component="p">
                                            Price: {product.price}  Quantity: {product.quantity}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" onClick={() => props.addtocart(product.id)}>Add To Cart</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addtocart: function (productid) {

            // direct add item to array.
            // dispatch({ type: "addtocart", payload: productid });

            // if present logic.
            // eslint-disable-next-line
            if (localStorage.getItem("cart") != undefined) {
                let cart = JSON.parse(localStorage.getItem("cart"));
                if (cart.includes(productid)) {
                    alert("product already added");
                } else {
                    cart.push(productid);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    // dispatch functions here
                    dispatch({ type: "addtocart", payload: productid });
                    alert("Product Added");
                }
            } else {
                let cart = [];
                cart.push(productid);
                localStorage.setItem("cart", JSON.stringify(cart));
                // dispatch functions here
                dispatch({ type: "addtocart", payload: productid });
                alert("Product Added");
            }

        },
        clearcart: function () {
            let cart = [];
            localStorage.setItem("cart", JSON.stringify(cart));
            // dispatch functions here
            dispatch({ type: "clearcart" });
            alert("Cart Cleared");
        }
    }
}
export default connect(null, mapDispatchToProps)(Products);