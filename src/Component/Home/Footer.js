import React from 'react';
import logo from '../../img/logoo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope , faHome    } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-items">
                           <div className='footer-logo-main'>
                           <img className='footer-logo' src={logo} alt="" />
                           </div>
                            <p>
                                <p className='mt-3'>Motorcycle design varies greatly to suit a range of different purposes: </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="footer-items">
                            <h5>Products</h5>
                            <ul>
                                <li>BMW</li>
                                <li>YAMAHAA</li>
                                <li>HERO</li>
                                <li>BAJAJ</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                    <div className="footer-items">
                            <h5>Contact</h5>
                            <ul>
                                <li> <FontAwesomeIcon className="footer-icon" icon={faHome} /> <span className='ms-2'>New York</span> </li>
                                <li> <FontAwesomeIcon className="footer-icon" icon={faEnvelope} /> <span className='ms-2'>akjilani@086gmail.com</span> </li>
                                <li> <FontAwesomeIcon className="footer-icon" icon={faPhone} /> <span className='ms-2'>+8801795849068</span> </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                       <div className="footer-items">
                       <h5>Photo Stream</h5>
                        <div className="d-flex photo-stream-show">
                            <img src="https://pngimg.com/uploads/motorcycle/motorcycle_PNG3156.png" alt="" />
                            <img src="https://images.pngnice.com/download/2007/Honda-Motorcycle-PNG-File.png" alt="" />
                            <img src="https://images.pngnice.com/download/2007/Honda-CBR-PNG-Photos.png" alt="" />
                        </div>
                        <div className="d-flex photo-stream-show mt-3">
                            <img src="https://www.pngmart.com/files/10/Honda-CBR-PNG-Clipart.png" alt="" />
                            <img src="https://content2.kawasaki.com/ContentStorage/KMC/Products/8798/8c85b065-f4e9-4ee6-966f-2b7993daff08.png?w=767" alt="" />
                            <img src="https://www.pngmart.com/files/10/Honda-Bike-PNG-Transparent.png" alt="" />
                        </div>
                       </div>
                       <h6 className='mt-3'> This our big Collection</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;