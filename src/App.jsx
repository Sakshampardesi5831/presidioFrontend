import { Register } from "./views/Auth/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./views/Auth/Login";
import { Dashboard } from "./views/Dashboard";
import Profile from "./views/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
