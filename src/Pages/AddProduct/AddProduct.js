import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [dataa, setDataa] = useState([])
    const location = useLocation();


    console.log(dataa)

    const { loading } = useContext(AuthContext)

    const addProducts = (event) => {
        event.preventDefault()
        const form = event.target;
        const product = form.productname.value;
        const price = form.price.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const year = form.year.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const addProductsData = {
            product,
            price,
            category,
            condition,
            phone,
            location,
            year,
            photo,
            description
        }
        console.log(category)


        fetch('http://localhost:5000/addproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(addProductsData),
        })
            .then(res => res.json())
            .then(data => {
                setDataa(data)
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
        <div className=''>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className='text-center text-4xl text-primary font-bold my-10'>Add a product</h1>

            {
                dataa?.acknowledged && <Navigate to="/dashboard/myproducts" state={{ from: location }} replace></Navigate>
            }

            <form onSubmit={addProducts} className='w-9/12 mx-auto border border-neutral  p-10'>

                <div className=" grid gap-4 lg:grid-cols-3 grid-cols-1 mb-2">
                    <input name='productname' type="text" placeholder="Product Name" className="input input-bordered rounded " />

                    <input name='price' type="text" placeholder="Price" className="input input-bordered rounded" />


                    <select name='category' className="select select-bordered w-full ">
                        <option disabled selected>Category</option>
                        <option>Adventure</option>
                        <option>Novel</option>
                        <option>Fantasy</option>
                    </select>

                    <select name='condition' className="select select-bordered w-full ">
                        <option disabled selected>Product Condition</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>

                    <input name='phone' type="text" placeholder="Mobile Number" className="input input-bordered rounded " />

                    <input name='location' type="text" placeholder="Location" className="input input-bordered rounded" />
                </div>

                <div className=" grid gap-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-2">

                    <input name='year' type="tel" placeholder="Year of purchase" className="input input-bordered rounded w-full mb-2" />

                    <input name='photo' type="tel" placeholder="Product Photo Url" className="input input-bordered rounded w-full mb-2" />
                </div>

                <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Description"></textarea>

                <input type="submit" className='bg-primary w-full  text-white py-2 rounded-lg my-5' />
            </form >
        </div >
    );
};

export default AddProduct;