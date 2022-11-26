import React from 'react';
import img from '../../../assets/book.jpg'
import icon from '../../../assets/icon.png'
import person1 from '../../../assets/person1.jpg'
import person2 from '../../../assets/person2.jpg'
import person3 from '../../../assets/person3.jpg'
import ReviewData from './ReviewData';

const Review = () => {

    const reviewData = [
        {
            image: person1,
            icon: icon,
            name: "Halima Ahsan",
            head: "Great reseller book shop!",
            description: "This is a really nice resale shop. I got all kinds of books here. They are also very sincere. I highly recommend this site...",
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: person2,
            icon: icon,
            name: "Nikhil Bashar",
            head: "Nice Shop!",
            description: "This is a really nice resale shop. I got all kinds of books here. They are also very sincere. I highly recommend this site...",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: person3,
            icon: icon,
            name: "Sriti Toma",
            head: "Love this store!",
            description: "This is a really nice resale shop. I got all kinds of books here. They are also very sincere. I highly recommend this site...",
            prev: 2,
            id: 3,
            next: 1
        },
    ]

    return (
        <div>
            <h1 className='text-center text-4xl text-primary font-bold mt-32'>What people says about us</h1>
            <div className="hero bg-white ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="w-5/12 rounded-lg hidden lg:block" alt='' />
                    <div className='border-2 border-gray-300 p-10 bg-success'>
                        <div className="carousel w-full text-center">
                            {
                                reviewData.map(review => <ReviewData
                                    key={review.id}
                                    review={review}
                                ></ReviewData>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;