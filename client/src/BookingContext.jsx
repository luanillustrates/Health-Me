import React, { createContext, useContext, useReducer, useState } from 'react';

export const BookingContext = createContext('');

const initialState = {
  selectedData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'QUERY_USER':
      return { ...state, selectedData: action.payload };
    default:
      return state;
  }
};

const BookingContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [service, setService] = useState(null);
  const [bookedDate, setBookedDate] = useState(null);
  const [bookedTime, setBookedTime] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSelectedData = (data) => {
    dispatch({ type: 'QUERY_USER', payload: data });
  };
  const value = {
    user,
    setUser,
    service,
    setService,
    bookedDate,
    setBookedDate,
    bookedTime,
    setBookedTime,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error();
  }
  return context;
};
export { BookingContextProvider, useBookingContext };
