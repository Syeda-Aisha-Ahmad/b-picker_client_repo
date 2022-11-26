import React, { useEffect, useState } from 'react';
import image from '../../../assets/banner.jpg'
import bgfantasy from '../../../assets/bg-fantasy.jpg'
import fiction from '../../../assets/fiction.jpg'
import fantasy from '../../../assets/fantasy.jpg'
import fictionbg from '../../../assets/fictionbg.jpg'
import adventurebg from '../../../assets/adventurebg.jpg'
import adventure from '../../../assets/adventure.jpg'
import { info } from 'daisyui/src/colors';
import Category from './Category';

const Categories = () => {

    const infos = [
        {
            "name": "Adventure",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556769448l/41212773.jpg",
            "bgImage": "https://wallpapercave.com/uwp/uwp2007266.jpeg"
        },
        {
            "name": "Fiction",
            "image": "https://media.npr.org/assets/bakertaylor/covers/t/the-lord-of-the-rings/9780618640157_custom-bd5c36cb700fafac72208e5f622a6d1a9ca85489-s300-c85.jpg",
            "bgImage": "https://wallpapercave.com/wp/jgVMCXa.jpg"
        },
        {
            "name": "Fantasy",
            "image": "https://rutasepetys.com/wp-content/uploads/2018/06/SaltToTheSea_Intl_Latvia.jpg",
            "bgImage": "https://cdn.suwalls.com/wallpapers/fantasy/sea-creature-46731-1920x1200.jpg"
        }
    ]

    return (
        <div className='mt-24'>
            <h1 className='text-center text-accent font-bold text-4xl my-10'>
                Categories
            </h1>

            <div>
                <div className=" bg-white-200 grid gap-x-10 gap-y-10 lg:px-16 lg:grid-cols-3 md:grid-cols-2">

                    {
                        infos.map(info => <Category
                            info={info}
                        ></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;