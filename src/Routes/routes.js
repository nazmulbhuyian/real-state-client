import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import AddAppartment from "../Pages/Dashboard/AddAppartment/AddAppartment";
import AllAggent from "../Pages/Dashboard/AllAggent/AllAggent";
import AllBooking from "../Pages/Dashboard/AllBooking/AllBooking";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Details from "../Pages/Home/Categories/Categori/Details";
import SingleDetail from "../Pages/Home/Categories/SingleItem/SingleDetail";
import Home from "../Pages/Home/Home";
import MyBook from "../Pages/MyBook/MyBook";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Login/Register";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
            },
            {
                path: '/singleDetail/:id',
                element: <SingleDetail></SingleDetail>,
                loader: ({ params }) => fetch(`https://real-state-server.vercel.app/detail/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myBook',
                element: <PrivateRoute><MyBook></MyBook></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><AdminRoute><DashboardLayout></DashboardLayout></AdminRoute></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <AllBooking></AllBooking>
            },
            {
                path: '/dashboard/allAggent',
                element: <AllAggent></AllAggent>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/addAppartment',
                element: <AddAppartment></AddAppartment>
            }
        ]
    }
])