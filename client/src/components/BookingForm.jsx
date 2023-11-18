import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

// const BOOK_APPOINTMENT = gql`
//   mutation BookAppointment($name: String!, $email: String!) {
//     bookAppointment(name: $name, email: $email) {
//       success
//       message
//     }
//   }
// `;

const BookingForm = () => {
  useCalendlyEventListener({
    onEventScheduled: (e) => console.log(e.data.payload),
  });
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');

  //   const [bookAppointment] = useMutation(BOOK_APPOINTMENT);

  //   const handleBookAppointment = async () => {
  //     try {
  //       const { data } = await bookAppointment({
  //         variables: {
  //           name,
  //           email,
  //         },
  //       });

  //       if (data.bookAppointment.success) {
  //         console.log(
  //           'Appointment booked successfully:',
  //           data.bookAppointment.message
  //         );
  //         alert('Appointment booked successfully!');
  //       } else {
  //         console.error(
  //           'Error booking appointment:',
  //           data.bookAppointment.message
  //         );
  //         alert('Error booking appointment. Please try again.');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //       alert('An error occurred. Please try again.');
  //     }
  //   };

  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/luanillustrates/booking?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=83D8C6" />
    </div>
  );
};

export default BookingForm;
