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
          <Typography variant="h5" sx={{ mt: 5 }}>
            Thank you! Your appointment is confirmed.
          </Typography>
          <Typography sx={{ mt: 5 }}>
            Your appointment for the eye test is on the 22/11/2023 at 10:00am.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
