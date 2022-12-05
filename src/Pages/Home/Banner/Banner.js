import React from 'react';
// import banner from '../../../assets/banner.jpg'
import banner from '../../../assets/login.gif'

const Banner = () => {
    return (
        <div>

            <div className="hero py-32 lg:py-2 max-w-[87%] mx-auto text-left">
                <div className="hero-content flex-col lg:flex-row md:flex-row pl-0">
                    <div className="text-center lg:text-left md:text-left ">
                        <h1 className="text-5xl font-bold text-primary">Find or sell books here..!</h1>
                        <p className="py-6 text-neutral">It is a reseller bookstore where you can find many categories of books and sell the books you have already read.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 lg:w-7/12 md:w-7/12 bg-base-100">
                        <img src={banner} className="w-full" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;