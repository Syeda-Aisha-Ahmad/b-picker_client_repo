import React from 'react';
import about from '../../../assets/about.jpg'

const About = () => {
    return (
        <div>
            <div className="hero bg-success py-10">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <img src={about} alt="" className="lg:w-6/12 md:w-6/12 rounded-lg" />
                    <div className='lg:w-6/12 lg:pr-5 md:w-6/12 md:pr-10'>
                        <h1 className="text-5xl font-bold text-primary">About Us</h1>
                        <p className="py-6 text-lg">
                            We provide good reseller books at low prices all over the country. Our team is always busy to provide you good service from our site. You can sell your old or already read books at B-Picker reseller Store.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;