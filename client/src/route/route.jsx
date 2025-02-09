import { Navigate } from "react-router-dom";
import Home from "../component/Home";
import Applayout from "../component/layout/applayout";
import Login from "../component/Login";
import Signup from "../component/signup";
import Select from "../component/select";
const routes = [
    {
      path: "/",
      element: <Applayout />,
      children:[
        {
            index: true,
            element: <Navigate to="/" replace />
          },
   
        {
          path: "/",
          element: <Home />,
          
        },
        {
            path: "/login",
            element: <Login />,
            
          },
          {
            path: "/signup",
            element: <Signup/>,
            
          },
          {
            path: "/select",
            element: <Select/>,
            
          },
  ]
  }]
  export default routes;