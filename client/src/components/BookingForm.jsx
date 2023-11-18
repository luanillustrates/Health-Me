import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material';

export default function BookingForm() {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DemoContainer components={['StaticDatePicker']}>
          <DemoItem label=""> */}
        <StaticDatePicker defaultValue={dayjs('')} />
        {/* </DemoItem>
        </DemoContainer> */}

        <DigitalClock
          defaultValue={dayjs('2022-04-17T15:30')}
          ampm
          skipDisabled
          minTime={dayjs().set('hour', 9).startOf('hour')}
          maxTime={dayjs().set('hour', 16).startOf('hour')}
        />
      </LocalizationProvider>
    </Box>
  );
}
