import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Review></Review>
        </div>
    );
};

export default Home;