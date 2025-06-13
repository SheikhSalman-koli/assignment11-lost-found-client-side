import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import AddItem from "../Pages/AddItem";

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