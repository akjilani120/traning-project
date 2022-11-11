import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus , faGears  } from '@fortawesome/free-solid-svg-icons'
const FeaturesRow = ({moto}) => {
    const {img , year , type, make , engine , power, dipla, bore, name, price}= moto
    return (
        <Col>
            <Card className='fea-card'>
                
                <Card.Body>
                   <div className='d-flex justify-content-around align-items-center fea-card-header'>
                    <h4 className=''>{name}</h4>
                    <h5 className=''>$ {price}</h5>
                   </div>
                   <div className='feat-img-main'>
                      <img className='fea-card-img' src={img} alt="card-img" />
                      <div className='feat-img-main-overlay  justify-content-center align-items-center'>
                      <div className=''>
                      <p><FontAwesomeIcon className="fea-img-icon" icon={faPlus} /></p>
                      </div>
                      </div>
                   </div>
                   <div>
                    <ul className='d-flex justify-content-around align-items-center mt-3 fea-unorder'>
                        <li>
                           <h6 className='m-0 p-0'>YEAR</h6>
                           <p className='m-0 p-0'>{year}</p>
                        </li>
                        <li>
                        <h6 className='m-0 p-0'>TYPE</h6>
                           <p className='m-0 p-0'>{type}</p>
                        </li>
                        <li>
                        <h6 className='m-0 p-0'>MAKE</h6>
                           <p className='m-0 p-0'>{make}</p>
                        </li>
                    </ul>
                   </div>
                   <div className='d-flex justify-content-around align-items-center text-center'>
                    <div>
                    <h6 className='m-0 p-0'>Engine Type</h6>
                     <p className='m-0 p-0'>{engine}</p>
                    </div>
                    <div>
                    <h6 className='m-0 p-0'>Engine Power</h6>
                     <p className='m-0 p-0'>{power}</p>
                    </div>
                   </div>
                   <div className='d-flex justify-content-around align-items-center mt-3 text-center'>
                    <div>
                    <h6 className='m-0 p-0'>Displacement</h6>
                     <p className='m-0 p-0'>{dipla}</p>
                    </div>
                    <div>
                    <h6 className='m-0 p-0'>Bores/ Stroke</h6>
                     <p className='m-0 p-0'>{bore}</p>
                    </div>
                   </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeaturesRow;