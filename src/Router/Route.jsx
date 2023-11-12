import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

const Route = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Route;
