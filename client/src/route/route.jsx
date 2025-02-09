import { Navigate } from "react-router-dom";
import Home from "../component/home";
import Applayout from "../component/layout/applayout";
import Login from "../component/Login";
import Signup from "../component/signup";
const routes = [
    {
      path: "/",
      element: <Applayout />,
      children:[
        {
            index: true,
            element: <Navigate to="/home" replace />
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
            element: <Signup/>,
            
          },
  ]
  }]
  export default routes;