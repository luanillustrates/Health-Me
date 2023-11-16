import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material/';

export default function Home() {
  return (
    <>
      <Container sx={{ width: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{}}>
          <Typography variant="h1">Health Me</Typography>
          <Typography>A one-stop-shop to get your health needs met.</Typography>
        </Box>
      </Container>
    </>
  );
}
