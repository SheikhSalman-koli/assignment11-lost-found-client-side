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
import Recovered from "../Pages/Recovered";

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
                element:<PrivateRoute>
                    <AddItem></AddItem>
                </PrivateRoute>
            },
            {
                path: 'allitem',
                Component: AllItem,
            },
             {
                path: 'details/:id',
                loader: ({params})=> axios(`http://localhost:3000/details/${params.id}`),
                 element:<PrivateRoute>
                    <Dtails></Dtails>
                </PrivateRoute>,
                
            },
             {
                path: 'myitem/:email',
                loader: ({params})=> axios(`http://localhost:3000/myitem/${params.email}`),
                element:<PrivateRoute>
                    <MyItem></MyItem>
                </PrivateRoute>
            },
            {
                path: 'recovered/:email',
                loader : ({params})=> axios(`http://localhost:3000/recovered/${params.email}`),
                element: <PrivateRoute>
                    <Recovered></Recovered>
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