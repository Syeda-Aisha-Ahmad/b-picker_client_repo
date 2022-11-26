import React from 'react';

const AllBuyers = () => {
    return (
        <div>
            <h1 className='text-4xl text-center text-primary my-10 '>
                All Buyers
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Sellers</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td className='text-red-400'>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;