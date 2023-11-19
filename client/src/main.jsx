import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Error from './pages/Error';
import Login from './pages/Login';
import Services from './pages/Services';
// import Summary from "./pages/Summary";
// import Bookings from "./pages/Bookings";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      // {
      //   path: "/summary",
      //   element: <Summary />,
      // },
      // {
      //   path: "/bookings",
      //   element: <Bookings />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
