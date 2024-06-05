import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/AuthComponents/register/register.jsx";
import Login from "./components/AuthComponents/login/login.jsx";
import DashBoard from "./components/DashBoard/index.jsx";
import AuthLayout from "./components/AuthComponents/AuthLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <AuthLayout>
            <DashBoard />
          </AuthLayout>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
