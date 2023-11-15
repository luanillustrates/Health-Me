import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';

import App from './App.jsx';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import AppointmentConfirmed from './pages/AppointmentConfirmed';
// import SavedAppointments from './pages/SavedAppointments';
// import Doctor from './pages/Doctor';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     // error: <NoMatch />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       // {
//       //   path: '/login',
//       //   element: <Login />,
//       // },
//       // {
//       //   path: '/signup',
//       //   element: <Signup />,
//       // },
//       {
//         path: '/apppointmentconfirmed',
//         element: <AppointmentConfirmed />,
//       },
//       {
//         path: '/savedappointments',
//         element: <SavedAppointments />,
//       },
//       {
//         path: '/products/:id',
//         element: <Doctor />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router} />
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>