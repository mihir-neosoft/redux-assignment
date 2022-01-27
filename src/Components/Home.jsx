import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';

export default function Home() {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={12}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: grey[500],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',

                    }}
                >
                    <Typography component="h1" variant="h2" color="white">
                        Hello
                    </Typography>
                    <Typography component="h1" variant="h3" color="white">
                        Welcome to My App
                    </Typography>
                    <br />
                    <Link to="/Products">
                        <Button variant="contained" size="large">
                            Products
                        </Button>
                    </Link>
                </Box>
            </Grid>
        </Grid>
    );
}