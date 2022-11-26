import React from 'react';
import correct from '../../assets/correct.png'
import img from '../../assets/fiction.jpg'

const Category = () => {
    return (
        <div className='mt-16'>
            <h1 className="font-bold text-3xl text-center text-accent mb-20">Category Name</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-10'>
                <div className="card w-96 mx-auto bg-base-100 text-center">
                    <figure><img src={img} alt="Shoes" className='w-52' /></figure>
                    <div className="card-body pt-0">
                        <p className='font-bold mt-3'>Seller: Turrruk<img src={correct} className="badge bg-white border-0" alt="" /></p>
                        <h2 className="text-accent text-2xl font-bold">Ruta Sepetis</h2>

                        <div className=''>
                            <div className="">Original Price: <span className='text-orange-500 font-bold text-xl'>$500</span></div>
                            <div className="">Resale Price: <span className='text-orange-500 font-bold text-xl'>$200</span></div>
                        </div>
                        <p className='text-neutral'>Used: 2 years</p>

                        <small className='text-neutral'>Posted in 12.00 12th nov 2022, Dhaka, Bangladesh</small>


                        {/* The button to open modal */}
                        <label htmlFor="my-modal" className="btn btn-outline btn-accent">Book Now</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-accent mb-5">Book Name</h3>
                                <form action="">
                                    <div className=" grid gap-1 grid-cols-2 mb-2">
                                        <input type="text" placeholder="Name" className="input input-bordered rounded " />
                                        <input type="text" placeholder="Email" className="input input-bordered rounded" />
                                    </div>
                                    <div className=" grid gap-1 grid-cols-2 mb-2">
                                        <input type="text" placeholder="Item Name" className="input input-bordered rounded " />
                                        <input type="text" placeholder="Price" className="input input-bordered rounded" />
                                    </div>
                                    <input type="tel" placeholder="Phone Number" className="input input-bordered rounded w-full mb-2" />

                                    <input type="text" placeholder="Location" className="input input-bordered rounded w-full mb-2" />

                                    <input className='btn btn-secondary w-full mt-5' type="submit" value="submit" />

                                </form>

                            </div>
                        </div>







                    </div>
                </div>







                <div className="card w-96 mx-auto bg-base-100 text-center">
                    <figure><img src={img} alt="Shoes" className='w-52' /></figure>
                    <div className="card-body pt-0">
                        <p className='font-bold mt-3'>Seller: Turrruk<img src={correct} className="badge bg-white border-0" alt="" /></p>
                        <h2 className="text-accent text-2xl font-bold">Ruta Sepetis</h2>

                        <div className=''>
                            <div className="">Original Price: <span className='text-orange-500 font-bold text-xl'>$500</span></div>
                            <div className="">Resale Price: <span className='text-orange-500 font-bold text-xl'>$200</span></div>
                        </div>
                        <p className='text-neutral'>Used: 2 years</p>

                        <small className='text-neutral'>Posted in 12.00 12th nov 2022, Dhaka, Bangladesh</small>
                        <button className='btn btn-outline btn-accent '>Book Now</button>
                    </div>
                </div>

                <div className="card w-96 mx-auto bg-base-100 text-center">
                    <figure><img src={img} alt="Shoes" className='w-52' /></figure>
                    <div className="card-body pt-0">
                        <p className='font-bold mt-3'>Seller: Turrruk<img src={correct} className="badge bg-white border-0" alt="" /></p>
                        <h2 className="text-accent text-2xl font-bold">Ruta Sepetis</h2>

                        <div className=''>
                            <div className="">Original Price: <span className='text-orange-500 font-bold text-xl'>$500</span></div>
                            <div className="">Resale Price: <span className='text-orange-500 font-bold text-xl'>$200</span></div>
                        </div>
                        <p className='text-neutral'>Used: 2 years</p>

                        <small className='text-neutral'>Posted in 12.00 12th nov 2022, Dhaka, Bangladesh</small>
                        <button className='btn btn-outline btn-accent '>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;