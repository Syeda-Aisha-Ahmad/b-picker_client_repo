import React from 'react';
import correct from '../../../assets/correct.png'
import img from '../../../assets/fiction.jpg'

const Advertise = () => {
    return (
        <div>
            <h1 className='text-4xl text-center text-primary mt-20 mb-10 '>
                Advertise Products
            </h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-10'>
                <div className="card w-96 mx-auto bg-base-100 border pt-5">
                    <figure><img src={img} alt="Shoes" className='w-52' /></figure>
                    <div className="card-body pt-0">
                        <p className='font-bold mt-3'>Seller: Turrruk<img src={correct} className="badge bg-white border-0" alt="" /></p>
                        <h2 className="text-accent text-2xl font-bold">Ruta Sepetis</h2>

                        <div className=''>
                            <div className='text-orange-500 font-bold text-xl'>$200</div>
                        </div>
                        <p className='text-black neutral'>Category: Science</p>
                        <p className='text-black'>Product condition: Good</p>
                        <p className='text-black'>Contact: 015837823</p>
                        <p className='text-black'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, et alias. Natus alias vero id amet eveniet sed dignissimos dolorum!</p>

                        <small className='text-neutral'>Posted in 12.00 12th nov 2022, Dhaka, Bangladesh</small>


                        {/* The button to open modal */}
                        <label htmlFor="my-modal" className="btn btn-outline btn-accent">Book Now</label>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;