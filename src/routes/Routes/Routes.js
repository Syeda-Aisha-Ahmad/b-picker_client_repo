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
import MyBuyers from "../../Pages/MyBuyers/MyBuyers";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import Payment from "../../Pages/Payment/Payment";
import Reported from "../../Pages/Reported/Reported";
import Signup from "../../Pages/SignUp/Signup";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";
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
                element: <PrivateRoutes><Category></Category></PrivateRoutes>,
                loader: async ({ params }) => {
                    return fetch(`https://server-12.vercel.app/addproducts/${params.category}`);
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
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoutes><MyBuyers></MyBuyers></SellerRoutes>
            },
            {
                path: '/dashboard/reported',
                element: <AdminRoutes><Reported></Reported></AdminRoutes>
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