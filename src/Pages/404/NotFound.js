import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/404-Page.jpg'

const NotFound = () => {
    return (
        <div >
            <img src={image} alt="" className='mx-auto' />
            <div className='text-center'>
                <h1 className='font-bold text-3xl mt-5 mb-3'>Look like you're lost</h1>
                <p className='text-lg text-neutral mb-5'>the page you are looking for not availabe!</p>
                <Link to={"/"} className='btn btn-accent rounded'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;