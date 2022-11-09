import React from 'react';
import Banner from './Banner';
import './Home.css'
import HomeHeader from './HomeHeader';
const Home = () => {
    return (
        <div>
           <HomeHeader/>
            <Banner/>
        </div>
    );
};

export default Home;