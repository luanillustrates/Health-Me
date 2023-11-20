import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material/';

import BookingContext from '../BookingContext';

export default function Summary() {
  return (
    <>
      <Container sx={{ width: 1, display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography variant="h1">Appointment Confirmed</Typography>
          <Typography>Thank you! Your appointment is confirmed.</Typography>
        </Box>
      </Container>
    </>
  );
}
