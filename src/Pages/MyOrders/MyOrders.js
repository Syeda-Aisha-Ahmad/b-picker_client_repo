import React from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    return (
        <div>
            <h1 className='text-primary text-3xl font-bold my-10 text-center'>My Orders</h1>
            <div className="overflow-x-auto w-full lg:mx-auto md:px-10 md:mx-auto lg:px-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost  ">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <Link to={'/payment'}>
                                    <button className="btn btn-warning py-2 px-5">Pay</button>
                                </Link>
                            </th>
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrders;