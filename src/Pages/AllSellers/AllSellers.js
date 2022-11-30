import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const url = "https://server-12.vercel.app/users/seller";

const AllSellers = () => {
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }


    const handleDelete = user => {
        fetch(`https://server-12.vercel.app/users/seller/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
            })
    }

    return (
        <div>
            <h1 className='text-4xl text-center text-primary my-10 '>
                All Sellers
            </h1>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Sellers</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            sellers.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td className='btn btn-ghost'>Verify</td>
                                <td><button onClick={() => handleDelete(seller)} className='text-red-600'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;