import DashboardLayout from "../../layouts/Dashboard/DashboardLayout";
import NotFound from "../../Pages/404/NotFound";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Payment from "../../Pages/Payment/Payment";
import Signup from "../../Pages/SignUp/Signup";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UserRoutes from "../UserRoutes/UserRoutes";

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
                element: <Category></Category>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/addproducts/${params.category}`);
                },
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout> </PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <UserRoutes><MyOrders></MyOrders></UserRoutes>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;  