import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({ info }) => {
    const { name, image, bgImage } = info;
    return (
        <div className='parent'>

            <div className='carousel-img'>
                <img className='img-style' alt="" src={bgImage} />
            </div>

            <div className="absolute transform top-3 inset-x-2">
                <div className="hero-content flex-col flex-column-reverse">
                    <div className="w-52 ">
                        <img src={image} className="rounded-lg shadow-2x z-10" alt='img' />
                    </div>
                    <Link to={`category/${name}`}><button className="btn btn-ghost text-slate-200 text-xl">{name}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;