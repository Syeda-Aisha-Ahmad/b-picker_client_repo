import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const MyProducts = () => {

    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addproducts');
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteDoctor = product => {
        fetch(`http://localhost:5000/addproducts/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <p>fd</p>
    }

    const submit = (product) => {
        fetch(`http://localhost:5000/advertise`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfully toasted!')
                }
                else {
                    alert(data.message);
                }
            })
            .catch(error => console.error(error));
    }




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Sales status</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map(singleProduct => <tr>
                                <th>1</th>
                                <td>{singleProduct.product}</td>
                                <td>sold</td>
                                <td>{singleProduct.price}</td>
                                <td><button onClick={() => handleDeleteDoctor(singleProduct)} className='text-red-600'>Delete</button></td>
                                <td><button onClick={() => submit(singleProduct)} className='btn btn-warning border-0 bg-red-300 text-white'>Advertise</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;