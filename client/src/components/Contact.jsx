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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13085.576156382267!2d138.5915285!3d-34.9216534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c92d05b6adf3%3A0xb3146fda747e6572!2sAdelaide%20Medical%20School!5e0!3m2!1sen!2sau!4v1700046105170!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Container>
    </>
  );
}