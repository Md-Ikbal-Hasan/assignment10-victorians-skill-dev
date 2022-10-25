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
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Checkout from "../../Pages/Checkout/Checkout";


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
                element: <Courses></Courses>,
                loader: () => fetch(`https://victorians-skill-dev-server.vercel.app/course`)
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute> <CourseDetails></CourseDetails> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://victorians-skill-dev-server.vercel.app/course/${params.id}`)
            },

            {
                path: '/checkout/:id',
                element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://victorians-skill-dev-server.vercel.app/course/${params.id}`)
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