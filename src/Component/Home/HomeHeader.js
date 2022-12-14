import React from 'react';
import logoImg from '../../img/logoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHouse, faClock } from '@fortawesome/free-solid-svg-icons'

const HomeHeader = () => {
    return (
        <div>
            <div className="header-title-part px-3">
                <marquee className="title-name " behavior="alternate" direction="right">Anjuli Automobiles Pvt. Ltd. <span> - 8750270991,
                    9873580735</span></marquee>
            </div>
            <div className="header-details-part">
                <div className="px-3">
                <div className="header-nav-details d-md-flex justify-content-between">
                    <div className="nav-items-show">
                        <ul className='d-lg-flex justify-content-between align-items-center'>
                            <li className='logo-detail-item'> <img className='logo-img' src={logoImg} alt="Logo img" /> </li>
                            <li className='details-items'> 
                                <div>
                                    <p className='m-0 p-0'>8750270991</p>
                                    <p className='m-0 p-0'>9873580735</p>
                                </div>
                            </li>
                            <li className='details-items home-details'>
                                
                                <div>
                                    <p className='m-0 p-0'>A-15 , Block-1 Mathura Rd Mohan Cooperative estate, New Delhi-110044</p>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-items-show">
                        <div className='details-items-time'>
                            <div className='details-items time-details'> 
                                <div>
                                    <p className='m-0 p-0'>10.00 am</p>
                                    <p className='m-0 p-0'>to 08.00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;