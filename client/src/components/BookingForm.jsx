import React, { useContext, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import dayjs from 'dayjs';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Grid, Button } from '@mui/material';

import { PropTypes } from 'prop-types';
import BookingContext from '../BookingContext';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');

export default function BookingForm() {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={6}>
          <StaticDatePicker
            defaultValue={dayjs('')}
            componentsProps={{ actionBar: { actions: [] } }}
            disablePast
            views={['year', 'month', 'day']}
            onChange={''}
          />
        </Grid>
        <Grid item xs={6}>
          <DigitalClock
            defaultValue={dayjs()}
            ampm
            skipDisabled
            minTime={dayjs().set('hour', 9).startOf('hour')}
            maxTime={dayjs().set('hour', 16).startOf('hour')}
            onChange={''}
          />
        </Grid>
      </LocalizationProvider>
      <Button
        variant="contained"
        size="large"
        sx={{ mt: 8 }}
        onClick={''}
        component={RouterLink}
        to="/summary"
      >
        Book Appointment
      </Button>
    </Grid>
  );
}

BookingForm.propTypes = {
  bookedDate: PropTypes.instanceOf(Date),
  bookedTime: PropTypes.instanceOf(Date),
};
