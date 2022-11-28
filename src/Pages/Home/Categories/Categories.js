import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mt-24'>
            <h1 className='text-center text-accent font-bold text-4xl mb-5'>
                Categories
            </h1>
            <p className='text-lg text-neutral text-center mb-10 lg:w-5/12 mx-auto'>These are the popular book categories of our site. Browse through your favorite category</p>

            <div>
                <div className=" bg-white-200 grid gap-x-10 gap-y-10 lg:px-28 px-10 lg:grid-cols-3 md:grid-cols-2">

                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;