import React from 'react';
import { Button, Typography, Container, Paper, Grid, Box } from '@mui/material';
import { Wifi, FreeBreakfast, Phone ,Group, FavoriteBorder} from '@mui/icons-material/';


const Welcome = () => {
  return (
    <Container style={{ maxWidth: '600px' }}>
      <Box my={2}>
        <Typography variant="h5" align="center" gutterBottom>
          A Heartfelt Welcome to Our Home!
        </Typography>
        
        <Typography variant="subtitle1" align="center" paragraph>
          We're a close-knit family of four cousins, stepping into the world of short-term rentals. This isn't just a business for us; it's a passion. We've poured our hearts into creating a space that feels like home for every guest.
        </Typography>

        <Box mt={2} align="center">
          <Paper elevation={2} style={{ padding: '16px' }}>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={3} align="center">
                <FavoriteBorder color="error" style={{ fontSize: 50 }} />
                <Typography variant="body2">With Love</Typography>
              </Grid>
              <Grid item xs={3} align="center">
                <Group style={{ fontSize: 50 }} />
                <Typography variant="body2">Family-based</Typography>
              </Grid>
              <Grid item xs={6} align="center">
                <Typography variant="body2">
                  Our goal is to make your stay perfect. If there's even a slight hiccup, don't hesitate to let us know. We're committed to turning it around, because your comfort matters deeply to us.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Box mt={2} align="center">
          <Button 
            startIcon={<Phone />}
            variant="contained" 
            color="primary" 
            style={{ padding: '10px 20px' }}>
            Reach Out To Us
          </Button>
        </Box>

        <Typography variant="body2" align="center" paragraph style={{ marginTop: '20px' }}>
          We cherish every moment we get to host wonderful guests like you. We're excited and grateful for the chance to make your stay memorable!
        </Typography>
      </Box>
    </Container>
  );
}


export default Welcome;
