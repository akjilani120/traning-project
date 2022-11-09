import React from 'react';
import Banner from './Banner';
import CategoriusCart from './CategoriusCart';
import GoodFarmance from './GoodFarmance';
import './Home.css'
import HomeHeader from './HomeHeader';
const Home = () => {
    return (
        <div>
           <HomeHeader/>
            <Banner/>
            <GoodFarmance/>
            <CategoriusCart/>
        </div>
    );
};

export default Home;