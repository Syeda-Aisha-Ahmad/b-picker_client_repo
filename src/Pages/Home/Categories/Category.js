import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({ info }) => {
    const { name, image, bgImage } = info;
    return (
        <div className='parent'>

            <div className='cover-img'>
                <Link to={`category/${name}`}>
                    <img className='img-style w-full' alt="" src={bgImage} />
                </Link>
            </div>

            <div className="absolute transform top-14 inset-x-2">
                <div className="hero-content flex-col flex-column-reverse">
                    <div className="w-32">
                        <Link to={`category/${name}`}>
                            <img src={image} className="rounded-lg shadow-2x" alt='img' /></Link>
                    </div>
                    <Link to={`category/${name}`}><button className="btn btn-ghost text-slate-200 text-xl">{name}</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Category;