import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/Others/ErrorPage/ErrorPage";
import Blog from '../../Pages/Others/Blog/Blog';
import FAQ from '../../Pages/Others/FAQ/FAQ';
import Register from '../../Pages/Register/Register';
import Login from '../../Pages/Login/Login';
import Profile from '../../Pages/Profile/Profile'
import Courses from '../../Pages/Courses/Courses'
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
            },
            {
                path: '/courses',
                element: <PrivateRoute> <Courses></Courses> </PrivateRoute>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

        ]
    }
])