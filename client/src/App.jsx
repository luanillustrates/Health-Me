import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </ApolloProvider>
    </>
  );
}

export default App;
