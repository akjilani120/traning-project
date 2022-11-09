import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
    return (
        <div className='banner-main'>
            <Carousel indicators={false}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 slide-img"
                        src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 slide-img"
                        src="https://images.pexels.com/photos/2611675/pexels-photo-2611675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 slide-img"
                        src="https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
            <div className='banner-overflow d-flex align-items-center justify-content-center text-center'>
               <div>
               <h1 className='banner-title'>Welcome to Anjuli Automobiles Pvt. Ltd.</h1>
                <h5>Quality is Remembered long,
                    After the price is Forgotten !!</h5>
                <h2 className='banner-motor'> Motorcycles</h2>
               </div>
            </div>
        </div>
    );
};

export default Banner;