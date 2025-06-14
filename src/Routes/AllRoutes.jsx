import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import AddItem from "../Pages/AddItem";
import AllItem from "../Pages/AllItem";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'additem',
                Component: AddItem
            },
            {
                path: 'allitem',
                Component: AllItem
            },
            {
                path: 'signin',
                Component: Signin
            },
              {
                path: 'signup',
                Component: Signup
            }
        ] 
    }
])