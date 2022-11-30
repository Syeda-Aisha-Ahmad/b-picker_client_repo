import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import correct from '../../../assets/correct.png'
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../shared/Loading/Loading';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['addproducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = product => {
        fetch(`http://localhost:5000/advertise/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.name} deleted successfully`)
                    console.log(data);
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(user)


    return (
        <div>
            {
                products.length > 0 ?
                    <div>
                        <h1 className='text-4xl text-center text-primary mt-20 mb-10 '>
                            Advertise Products {products.length}
                        </h1>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-10'>

                            {
                                products.map(product => <div className="card w-96 mx-auto bg-base-100 border pt-5">
                                    <figure><img src={product.photo} alt="Shoes" className='w-52' /></figure>
                                    <div className="card-body pt-0">
                                        <p className='font-bold mt-3'>Seller: {user?.displayName}<img src={correct} className="badge bg-white border-0" alt="" /></p>
                                        <h2 className="text-accent text-2xl font-bold">{product.product}</h2>

                                        <div className=''>
                                            <div className='text-orange-500 font-bold text-xl'>Original price: <span className='text-gray-700'>{product.price}</span></div>
                                            <div className='text-orange-500 font-bold text-xl'>Resale price: <span className='text-gray-700'>{product.price}</span></div>
                                        </div>
                                        <p className='text-black neutral'>Category: {product.category}</p>
                                        <p className='text-black'>condition: {product.condition}</p>
                                        <p className='text-black'>Contact: {product.phone}</p>
                                        <p className='text-black'>Year of purchase: {product.year}</p>
                                        <p className='text-black'>Description: {product.description}</p>

                                        <small className='text-neutral'>Posted in 12.00 12th nov 2022, {product.location}</small>
                                        <span className='text-green-700 font-semibold'>Available</span>

                                        <button></button>
                                        {/* The button to open modal */}
                                        <button onClick={() => handleDelete(product)} className="btn btn-outline btn-accent">Book Now</button>

                                    </div>
                                </div>)
                            }


                        </div>
                    </div>
                    :
                    <div className='hidden'>
                        <h1 className='text-4xl text-center text-primary mt-20 mb-10 '>
                            Advertise Products {products.length}
                        </h1>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-10'>

                            {
                                products.map(product => <div className="card w-96 mx-auto bg-base-100 border pt-5">
                                    <figure><img src={product.photo} alt="Shoes" className='w-52' /></figure>
                                    <div className="card-body pt-0">
                                        <p className='font-bold mt-3'>Seller: {user?.displayName}<img src={correct} className="badge bg-white border-0" alt="" /></p>
                                        <h2 className="text-accent text-2xl font-bold">{product.product}</h2>

                                        <div className=''>
                                            <div className='text-orange-500 font-bold text-xl'>Original price: <span className='text-gray-700'>{product.price}</span></div>
                                            <div className='text-orange-500 font-bold text-xl'>Resale price: <span className='text-gray-700'>{product.price}</span></div>
                                        </div>
                                        <p className='text-black neutral'>Category: {product.category}</p>
                                        <p className='text-black'>condition: {product.condition}</p>
                                        <p className='text-black'>Contact: {product.phone}</p>
                                        <p className='text-black'>Year of purchase: {product.year}</p>
                                        <p className='text-black'>Description: {product.description}</p>

                                        <small className='text-neutral'>Posted in 12.00 12th nov 2022, {product.location}</small>
                                        <span className='text-green-700 font-semibold'>Available</span>


                                        {/* The button to open modal */}
                                        <label htmlFor="my-modal" className="btn btn-outline btn-accent">Book Now</label>

                                    </div>
                                </div>)
                            }


                        </div>
                    </div>
            }
        </div>
    );
};

export default Advertise;