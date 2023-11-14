import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Nav from './components/Nav';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <Nav />
      <Home />
      <Services />
      <Contact />
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;
