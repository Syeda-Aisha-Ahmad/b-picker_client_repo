import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../../shared/Loading/Loading';
import Category from './Category';

const Categories = () => {

    const url = "https://server-12.vercel.app/categories"

    const [categories, setCategories] = React.useState(null);
    const { loading } = useContext(AuthContext);

    React.useEffect(() => {
        axios.get(url).then((response) => {
            setCategories(response.data);
        });
    }, []);

    if (!categories) return null;
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='my-24'>
            <h1 className='text-center text-accent font-bold text-4xl mb-5'>
                Categories
            </h1>
            <p className='text-lg text-neutral text-center mb-10 lg:w-5/12 mx-auto'>These are the popular book categories of our site. Browse through your favorite category</p>

            <div className='max-w-[87%] mx-auto'>
                <div className=" bg-white-200 grid gap-x-10 gap-y-10 lg:grid-cols-3 md:grid-cols-2">

                    {
                        categories.map(categoryy => <Category
                            key={categoryy._id}
                            categoryy={categoryy}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;