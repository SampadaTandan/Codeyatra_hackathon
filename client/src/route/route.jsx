import { Navigate } from "react-router-dom";
import Home from "../component/Home";
import Applayout from "../component/layout/applayout";
import Login from "../component/Login";
import Signup from "../component/signup";
import Select from "../component/select";
import FormComponent from "../component/form"; // Assuming you have a separate form component
import Subs from "../component/subs";
import Checkout from "../component/Checkout";

const routes = [
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/select",
        element: <Select />,
      },
      {
        path: "/form",
        element: <FormComponent />, // Make sure to import the FormComponent correctly
      },
      {
        path: "/subs",
        element: <Subs />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
];

export default routes;
