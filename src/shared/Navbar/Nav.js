import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import logo from '../../assets/logo.png'

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);

    // Logout
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div className="navbar bg-primary text-white">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        {
                            user?.uid && <li><Link to={'/dashboard'}>Dashboard</Link></li>
                        }

                        <li><Link to={'/blog'}>Blog</Link></li>
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} className="w-10 mr-2" alt="" /></Link>
                <Link to={'/'} className=" text-white normal-case font-bold text-2xl">  B-Picker</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/'}>Home</Link></li>
                    {
                        user?.uid && <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    }
                    <li><Link to={'/blog'}>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link to={'/'} onClick={handleLogout} className="btn btn-outline btn-white px-10 text-white">Log out</Link>
                        :
                        <Link to={'/login'} className="btn btn-outline btn-white px-10 text-white">Login</Link>
                }


            </div>
        </div>
    );
};

export default Nav;