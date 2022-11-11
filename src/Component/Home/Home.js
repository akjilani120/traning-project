import React from 'react';
import AboveRider from './AboveRider';
import Banner from './Banner';
import CategoriusCart from './CategoriusCart';
import GoodFarmance from './GoodFarmance';
import './Home.css'
import HomeHeader from './HomeHeader';
import MotorFeature from './MotorFeature';
import ShowMotors from './ShowMotors';
const Home = () => {
    return (
        <div>
           <HomeHeader/>
            <Banner/>
            <GoodFarmance/>
            <CategoriusCart/>
            <MotorFeature/>
            <AboveRider/>
            <ShowMotors/>
        </div>
    );
};

export default Home;