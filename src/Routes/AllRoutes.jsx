import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import AddItem from "../Pages/AddItem";
import AllItem from "../Pages/AllItem";
import Dtails from "../Pages/Dtails";
import axios from "axios";
import MyItem from "../Pages/MyItem";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";

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
                // Component: AddItem,
                element:<PrivateRoute>
                    <AddItem></AddItem>
                </PrivateRoute>
            },
            {
                path: 'allitem',
                Component: AllItem
            },
             {
                path: 'details/:id',
                loader: ({params})=> axios(`http://localhost:3000/details/${params.id}`),
                // Component: Dtails,
                 element:<PrivateRoute>
                    <Dtails></Dtails>
                </PrivateRoute>
            },
             {
                path: 'myitem/:email',
                loader: ({params})=> axios(`http://localhost:3000/myitem/${params.email}`),
                // Component: MyItem,
                element:<PrivateRoute>
                    <MyItem></MyItem>
                </PrivateRoute>
            },
            {
                path: 'signin',
                Component: Signin
            },
              {
                path: 'signup',
                Component: Signup
            },
            {
                path: '*',
                Component: NotFound
            }
        ] 
    }
])