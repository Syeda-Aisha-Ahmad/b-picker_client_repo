import React from 'react';

const AllSellers = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Sellers</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>fd@gmail.com</td>
                            <td className='btn btn-ghost'>Verify</td>
                            <td className='btn btn-red-400'>Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;