import React from 'react';
import Banner from './Banner';
import CategoriusCart from './CategoriusCart';
import GoodFarmance from './GoodFarmance';
import './Home.css'
import HomeHeader from './HomeHeader';
import MotorFeature from './MotorFeature';
const Home = () => {
    return (
        <div>
           <HomeHeader/>
            <Banner/>
            <GoodFarmance/>
            <CategoriusCart/>
            <MotorFeature/>
        </div>
    );
};

export default Home;