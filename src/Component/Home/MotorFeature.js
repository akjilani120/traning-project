import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import FeaturesRow from './FeaturesRow';
const MotorFeature = () => {
    const [motos, setMotos] = useState([])
    useEffect(() => {
        fetch("motor.json")
            .then(res => res.json())
            .then(data => setMotos(data))
    }, [])
    return (
        <div className='features-main'>
            <div className="features-header d-flex justify-content-center text-center ">
                <div className=''>
                    <img className='fea-logo' src="https://keymoto.templines.org/wp/wp-content/uploads/2021/04/logo-dark.svg" alt="" />
                    <h3 className='feu-lev'>TAKING RIDES TO A NEWER LEVEL</h3>
                    <h1 className='feu-title'>CHOOSE A MOTORCYCLE</h1>
                    <p className='feu-details'>With everything from Tandem bikes, Hybrid bikes, Sups and our ever popular Family Quad Cycles <br /> we have something for everyone to enjoy the great outdoors.
                    </p>
                </div>
            </div>
            <div className="container mt-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        motos.map(moto => <FeaturesRow moto={moto} key={moto.id} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default MotorFeature;