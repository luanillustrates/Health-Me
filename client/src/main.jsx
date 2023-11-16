import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Summary from "./pages/Summary";
// import Bookings from "./pages/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
