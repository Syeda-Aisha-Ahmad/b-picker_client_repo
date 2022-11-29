import { isAdmin } from '@firebase/util';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hook/AdminAccount/AdminAccount';
import useUser from '../../hook/userAccount/userAccount';
import Nav from '../../shared/Navbar/Nav';

const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext);
    const [isUser, isUserLoading] = useUser(user?.email);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
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
                        {
                            isUser && <li><Link to={'/dashboard/myorders'}>My Orders</Link></li>
                        }

                        <li><Link to={'/dashboard/addproduct'}>Add A Product</Link></li>
                        <li><Link to={'/dashboard/myproducts'}>My Products</Link></li>

                        {
                            isAdmin &&
                            <>
                                <li><Link to={'/dashboard/allsellers'}>All Sellers</Link></li>
                                <li><Link to={'/dashboard/allbuyers'}>All Buyers</Link></li></>
                        }


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;