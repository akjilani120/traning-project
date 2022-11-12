import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const GoodFarmance = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="good-header text-center">
                    <h2> Taking Tides To A newer Level</h2>
                    <h1>GREAT PERFORMANCE THAT <br className='d-none d-lg-block'/>
                        MATTERS IN FUTURE</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 mt-3">
                        <Card className="goodFarmence-card">                            
                            <Card.Body>
                                <p className="my-4 good-card-title">CUTTING EDGE TECH</p>
                                <Card.Text className="card-about-text">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to . 
                                </Card.Text>
                                <Card.Img variant="top" src="https://keymoto.templines.org/wp/wp-content/uploads/2020/11/home-page-decor-image-1-min.jpg" />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-3">
                    <Card className="goodFarmence-card">                            
                            <Card.Body>
                                <p className="my-4 good-card-title">PERFECT STYLING</p>
                                <Card.Text className="card-about-text">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to . 
                                </Card.Text>
                                <Card.Img variant="top" src="https://keymoto.templines.org/wp/wp-content/uploads/2021/12/about-us-icon-box-image-2-min.jpeg" />
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 mt-3">
                    <Card className="goodFarmence-card">                            
                            <Card.Body>
                                <p className="my-4 good-card-title">DISTINCTIVE BEAUTY</p>
                                <Card.Text className="card-about-text">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to . 
                                    
                                </Card.Text>
                                <Card.Img variant="top" src="https://keymoto.templines.org/wp/wp-content/uploads/2021/12/about-us-icon-box-image-3-min.jpeg" />
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodFarmance;