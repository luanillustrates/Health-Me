import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import dayjs from 'dayjs';

import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Grid, Button } from '@mui/material';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { UPDATE_USER } from '../utils/mutations';
import { useBookingContext } from '../BookingContext';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');

export default function BookingForm() {
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
    <Grid container spacing={1}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={6}>
          <StaticDatePicker
            defaultValue={dayjs('')}
            componentsProps={{ actionBar: { actions: [] } }}
            disablePast
            views={['year', 'month', 'day']}
            onChange={() => handleSelectionChange('newData')}
          />
        </Grid>
        <Grid item xs={6}>
          <DigitalClock
            defaultValue={dayjs()}
            ampm
            skipDisabled
            minTime={dayjs().set('hour', 9).startOf('hour')}
            maxTime={dayjs().set('hour', 16).startOf('hour')}
            onChange={() => handleSelectionChange('newData')}
          />
        </Grid>
      </LocalizationProvider>
      <Button
        size="large"
        onClick={() => handleSelectionChange('newData')}
        component={RouterLink}
        to="/summary"
      >
        Book Appointment
      </Button>
    </Grid>
  );
}
