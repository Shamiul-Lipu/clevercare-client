import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AddToy from "../Pages/AddToy";
import AllToys from "../Pages/AllToys";
import MyToys from "../Pages/MyToys";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'all-toys',
                element: <AllToys />
            },
            {
                path: 'my-toys',
                element: <MyToys />
            },
            {
                path: 'add-toy',
                element: <AddToy />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
]);

export default router;