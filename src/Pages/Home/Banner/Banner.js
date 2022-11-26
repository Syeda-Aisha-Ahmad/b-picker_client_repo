import React from 'react';
// import banner from '../../../assets/banner.jpg'
import banner from '../../../assets/login.gif'

const Banner = () => {
    return (
        <div>

            <div className="hero lg:min-h-screen py-32 lg:py-2 bg-white">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <div className="text-center lg:text-left md:text-left lg:pl-10 md:pl-10">
                        <h1 className="text-5xl font-bold text-primary">Find or sell books here..!</h1>
                        <p className="py-6 text-neutral">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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