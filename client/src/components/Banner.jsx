import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Link as RouterLink } from 'react-router-dom';
import doctorBanner from '../assets/images/doctor-banner.jpg';

export default function MediaCard() {
  return (
    <Box sx={{ position: 'relative' }}>
      <CardMedia
        position="relative"
        component="img"
        src={doctorBanner}
        sx={{
          height: '100vh',
          objectFit: 'cover',
          objectPosition: '0 5%',
          opacity: '80%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          objectFit: 'contain',
          top: '30%',
          textAlign: 'center',
          width: '100vh',
          color: 'black',
          padding: '10px',
          // textShadow: "5px 5px 50px grey",
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          Health Me
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          A one-stop shop to get your health needs met.
        </Typography>
        <CardActions>
          <Button size="large" component={RouterLink} to="/services">
            Book an appointment
          </Button>
        </CardActions>
      </Box>
    </Box>
  );
}
