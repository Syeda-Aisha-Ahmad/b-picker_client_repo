import React from 'react';

const AddProduct = () => {
    return (
        <div className=''>
            <h1 className='text-center text-4xl text-primary font-bold my-10'>Add a product</h1>
            <form className='w-9/12 mx-auto border border-neutral  p-10'>
                <div className=" grid gap-4 grid-cols-3 mb-2">
                    <input type="text" placeholder="Product Name" className="input input-bordered rounded " />

                    <input type="text" placeholder="Price" className="input input-bordered rounded" />

                    <input type="text" placeholder="Category" className="input input-bordered rounded" />

                    <select name='time' className="select select-bordered w-full ">
                        <option value="">Product Condition Excellent</option>
                        <option value="">Product Condition Good</option>
                        <option value="">Product Condition Fair</option>
                    </select>

                    <input type="text" placeholder="Mobile Number" className="input input-bordered rounded " />

                    <input type="text" placeholder="Location" className="input input-bordered rounded" />
                </div>

                <div className=" grid gap-2 grid-cols-2 mb-2">

                    <input type="tel" placeholder="Year of purchase" className="input input-bordered rounded w-full mb-2" />

                    <input type="tel" placeholder="Product Photo Url" className="input input-bordered rounded w-full mb-2" />
                </div>

                <textarea className="textarea textarea-bordered w-full" placeholder="Description"></textarea>

                <input type="submit" className='bg-primary w-full  text-white py-2 rounded-lg my-5' />
            </form >
        </div >
    );
};

export default AddProduct;