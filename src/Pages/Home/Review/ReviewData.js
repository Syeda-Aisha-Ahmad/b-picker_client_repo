import React from 'react';

const ReviewData = ({ review }) => {

    const { id, image, icon, name, head, description, next, prev } = review;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div>
                <img src={icon} alt="" className='w-10 mx-auto  mb-3' />

                <div className="rating rating-xs mb-3">
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 mx-1" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 mx-1" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 mx-1" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 mx-1" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 mx-1" checked />
                </div>

                <h1 className='text-2xl font-bold text-accent mb-5'>{head}</h1>
                <p className='text-neutral'>{description}</p>

                <div className="avatar mt-6 ">
                    <div className="w-20 border border-primary rounded-full">
                        <img src={image} alt="person" />
                    </div>
                </div>
                <p className='text-accent'> {name} </p>
                <p className='text-neutral'>Customer</p>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 bottom-1/4">
                <a href={`#slide${prev}`} className="btn btn-ghost btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-ghost  btn-circle">❯</a>
            </div>
        </div>
    );
};

export default ReviewData;