import * as React from 'react';
import { Container, Typography, Grid } from '@mui/material/';
import ServiceCard from '../components/ServiceCard';

import generalhealth from '../assets/images/generalhealth.jpg';
import earspecialist from '../assets/images/earspecialist.jpg';
import eyespecialist from '../assets/images/eyespecialist.jpg';
import eyetest from '../assets/images/eyetest.jpg';
import heartest from '../assets/images/heartest.jpg';
import scans from '../assets/images/scans.jpg';
import specialistref from '../assets/images/specialistref.jpg';
import teethclean from '../assets/images/teethclean.jpg';
import teethspecialist from '../assets/images/teethspecialist.jpg';

const services = [
  {
    name: 'General Health Check',
    description: 'The routine body maintenance',
    image: generalhealth,
    field: 'General Health',
    alt: 'stethoscope',
  },
  {
    name: 'Ear Specialist',
    description: 'You want someone to hear you out',
    image: earspecialist,
    field: 'Audiologist',
    alt: 'doctor checking ear',
  },
  {
    name: 'Eye Specialist',
    description: 'The doctor you want to keep your eye on',
    image: eyespecialist,
    field: 'Optometrist',
    alt: 'eye examination equipment',
  },
  {
    name: 'Eye Test',
    description: 'It is time to see if you are due for glasses',
    image: eyetest,
    field: 'Optometrist',
    alt: 'eye test',
  },
  {
    name: 'Hearing Test',
    description: 'It was not the wax stopping the hearing',
    image: heartest,
    field: 'Audiologist',
    alt: 'hearing test',
  },
  {
    name: 'Scans',
    description: 'X-Rays, MRIs',
    image: scans,
    field: 'General Health',
    alt: 'examining mri scan',
  },
  {
    name: 'Specialist Referral',
    description: 'The issues are not just skin deep',
    image: specialistref,
    field: 'General Health',
    alt: 'doctor appointment',
  },
  {
    name: 'Teeth Clean',
    description: 'You forgot to floss',
    image: teethclean,
    field: 'Dentistry',
    alt: 'teeth clean',
  },
  {
    name: 'Teeth Specialist',
    description: 'You want someone to hear you out',
    image: teethspecialist,
    field: 'Dentistry',
    alt: 'checking teeth',
  },
];

export default function Services() {
  return (
    <>
      <Typography variant="h1">Services</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => {
          return (
            <ServiceCard
              name={service.name}
              description={service.description}
              image={service.image}
            />
          );
        })}
      </Grid>
    </>
  );
}
