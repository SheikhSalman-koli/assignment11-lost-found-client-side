import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Signin from "../Pages/Signin";
import Signup from "../Pages/Signup";
import AddItem from "../Pages/AddItem";
import Dtails from "../Pages/Dtails";
import axios from "axios";
import MyItem from "../Pages/MyItem";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";
import Recovered from "../Pages/Recovered";
import Spinner from "../Componants/Spinner";
import Blogs from "../Pages/Blogs";
import AllRecoveredItem from "../Pages/AllRecoveredItems";
import AllIUnrecoveredItem from "../Pages/AllIUnrecoveredItem";


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
                path: 'reportitem',
                element: <PrivateRoute>
                    <AddItem></AddItem>
                </PrivateRoute>
            },
            {
                path: 'AllIUnrecoveredItem',
                Component: AllIUnrecoveredItem,
            },
            {
                path: 'allRecoveredItem',
                Component: AllRecoveredItem
            },
            {
                path: 'details/:id',
                loader: ({ params }) => axios(`${import.meta.env.VITE_BASE_URL}/details/${params?.id}`),
                element: <PrivateRoute>
                    <Dtails></Dtails>
                </PrivateRoute>,
                HydrateFallback: Spinner
            },
            {
                path: 'myitem/:email',
                // loader: ({ params }) => axios(`${import.meta.env.VITE_BASE_URL}/myitem/${params.email}`),
                element: <PrivateRoute>
                    <MyItem></MyItem>
                </PrivateRoute>,
                HydrateFallback: Spinner
            },
            {
                path: 'recovered/:email',
                // loader: ({ params }) => axios(`${import.meta.env.VITE_BASE_URL}/recovered/${params.email}`),
                element: <PrivateRoute>
                    <Recovered></Recovered>
                </PrivateRoute>,
                HydrateFallback: Spinner
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
                path: 'blogs',
                Component : Blogs
            },

        ]
    },
    {
        path: '*',
        Component: NotFound
    }
])