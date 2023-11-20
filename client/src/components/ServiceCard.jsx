import { useContext, useEffect, useState } from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import { useBookingContext } from '../BookingContext';

import { PropTypes } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material/';

export default function ServiceCard({ name, image, altText, description }) {
  const { data: selectedData } = useQuery(QUERY_USER);
  const [updateSelectedData] = useMutation(UPDATE_USER);
  const setSelectedData = useBookingContext();

  const handleSelectionChange = (newData) => {
    updateSelectedData({
      variables: { newData },
    });
    setSelectedData(newData);
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" alt={altText} height="250" src={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => handleSelectionChange('newData')}
          component={RouterLink}
          to="/bookings"
        >
          Schedule an Appointment
        </Button>
      </CardActions>
    </Card>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
