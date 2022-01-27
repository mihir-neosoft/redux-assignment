import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MUILink from '@mui/material/Link';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


function TopNavBar(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item sm={1}>
                            <Typography variant="h5" component="h1">
                                {props.pagename}
                            </Typography>
                        </Grid>
                        <Grid item sm >
                            <Link to="/">
                                <MUILink color="white" underline="none" ml={2}>Home</MUILink>
                            </Link>
                            <Link to="/Products">
                                <MUILink color="white" underline="none" ml={2}>Products</MUILink>
                            </Link>
                        </Grid>
                        <Grid item sm textAlign="right">
                            <Typography variant="h6" component="h1">
                                Cart: {props.cart}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
        // cart: JSON.stringify(state.cart)
    }
}
export default connect(mapStateToProps)(TopNavBar);

