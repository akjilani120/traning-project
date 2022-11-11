import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight,  } from '@fortawesome/free-solid-svg-icons'
const AboveRider = () => {
    return (
        <div className='above-main' style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80")`
        }}>
            <div className="above-overflow">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className='above-hightligt'>TAKING RIDES TO A NEWER LEVEL</h4>
                            <h1 className='above-title'>A STEP ABOVE WITH
                                RIDER-FRIENDLY NATURE</h1>
                            <p className='above-details'>A motorcycle, often called a motorbike, bike, cycle, or trike, is a two- or three-wheeled motor vehicle. Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding</p>

                        </div>
                        <div className="col-md-6">
                            <div className='d-flex justify-content-center mb-4'>
                                <p> <FontAwesomeIcon className="above-icon" icon={faQuoteRight} /></p>
                                <div className='above-mission-main'>
                                    <h5 className='mb-3 fw-bold'>Our Mission Statement</h5>
                                    <p className=''>Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport, and off-road riding</p>
                                    <h3>Buy & Sell Online
                                        Safely Securely</h3>
                                    <h6>Reviews & Advice
From Experts</h6>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboveRider;