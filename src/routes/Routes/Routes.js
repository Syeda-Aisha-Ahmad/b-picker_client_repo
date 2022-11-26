import NotFound from "../../Pages/404/NotFound";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layouts/Main/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;  