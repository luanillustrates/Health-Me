import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material/';

export default function Contact() {
  return (
    <>
      <Container sx={{ width: 1, display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography variant="h1">Contact</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores,
            ea perferendis nisi voluptate amet recusandae? Amet cum ut enim
            error quae accusantium, illum sapiente voluptate at commodi
            consectetur voluptas quis?
          </Typography>
        </Box>
      </Container>
    </>
  );
}
