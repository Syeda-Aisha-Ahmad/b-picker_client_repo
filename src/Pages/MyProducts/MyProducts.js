import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../shared/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);



    const url = `http://localhost:5000/dashboard/myproducts?email=${user?.email}`;

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    console.log(myProducts);
    const handleDelete = product => {
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
        return <Loading></Loading>
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
                            myProducts.map((singleProduct, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{singleProduct.product}</td>
                                <td>sold</td>
                                <td>{singleProduct.price}</td>
                                <td><button onClick={() => handleDelete(singleProduct)} className='text-red-600'>Delete</button></td>
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