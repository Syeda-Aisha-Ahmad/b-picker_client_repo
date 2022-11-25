import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home/Home";

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
            }
        ]
    }
])

export default router;  