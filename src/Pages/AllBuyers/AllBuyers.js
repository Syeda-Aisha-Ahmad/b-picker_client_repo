import React from 'react';
import Loading from '../../shared/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const url = "http://localhost:5000/users/buyer";


const AllBuyers = () => {

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = user => {
        fetch(`http://localhost:5000/users/buyer/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`${user.name} deleted successfully`)
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!buyers) return null;
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
                            <th>Buyer</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>


                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td><button onClick={() => handleDelete(buyer)} className='text-red-600'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;