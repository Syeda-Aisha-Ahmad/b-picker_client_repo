import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Nav from '../../shared/Navbar/Nav';

const DashboardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content bg-warning bg-opacity-20">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        <li><Link to={'/dashboard/addproduct'}>Add A Product</Link></li>
                        <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>
                        <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>
                        <li><Link to={'/dashboard/allbuyers'}>All Buyers</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;