import React, { createContext, useState } from 'react';

const BookingContext = createContext('');

export default function BookingContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [service, setService] = useState(null);
  const [bookedDate, setBookedDate] = useState(null);
  const [bookedTime, setBookedTime] = useState(null);

  const addDate = (bookedDate) => {
    setBookedDate((prevState) => [...prevState, { bookedDate }]);
  };
  const addTime = (bookedTime) => {
    setBookedTime((prevState) => [...prevState, { bookedTime }]);
  };
  const chooseService = (service) => {
    setService((prevState) => [...prevState, { service }]);
  };

  const contextValue = {
    user,
    setUser,
    service,
    chooseService,
    bookedDate,
    addDate,
    bookedTime,
    addTime,
  };

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  );
}
