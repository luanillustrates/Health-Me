import { createContext, useEffect, useState } from 'react';
import {
  ApolloProvider,
  useQuery,
  gql,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

export const BookingContext = createContext({});

export function BookingContextProvider({ children }) {
  const [service, setService] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const { loading: accountLoading } = useQuery(QUERY_USER, {
    onClick: (data) => {
      setUser(data.user);
    },
  });

  return (
    <BookingContext.Provider
      value={{ service, setService, date, setDate, time, setTime }}
    >
      {children}
    </BookingContext.Provider>
  );
}
