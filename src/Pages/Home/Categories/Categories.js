import React from 'react';
import Category from './Category';

const Categories = () => {

    const infos = [
        {
            "name": "Adventure",
            "image": "https://m.media-amazon.com/images/I/51HOPrq9pXL.jpg",
            "bgImage": "https://img.freepik.com/free-vector/flat-adventure-background-with-mountains_23-2149045825.jpg?w=2000"
        },
        {
            "name": "Novel",
            "image": "https://m.media-amazon.com/images/I/71Wwe0vNLzL.jpg",
            "bgImage": "https://img.freepik.com/premium-vector/japanese-view-panorama-vector-sunset-flat-design-anime-style_584397-152.jpg?w=2000"
        },
        {
            "name": "Fantasy",
            "image": "https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/acaf761d-7991-477c-872f-6f8045c5ffc4/9781509879687.jpg",
            "bgImage": "https://img.freepik.com/free-vector/black-spooky-castle-flying-dragon-canyon-with-mountains-forest-cartoon-fantasy-illustration-with-medieval-palace-with-towers-creepy-beast-with-wings-rocks-pine-trees_107791-4592.jpg"
        }
    ]

    return (
        <div className='mt-24'>
            <h1 className='text-center text-accent font-bold text-4xl mb-5'>
                Categories
            </h1>
            <p className='text-lg text-neutral text-center mb-10 lg:w-5/12 mx-auto'>These are the popular book categories of our site. Browse through your favorite category</p>

            <div>
                <div className=" bg-white-200 grid gap-x-10 gap-y-10 lg:px-28 px-10 lg:grid-cols-3 md:grid-cols-2">

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