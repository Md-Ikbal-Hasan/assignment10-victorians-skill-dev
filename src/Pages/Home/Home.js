import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <div>
            <div className='my-carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.sololearn.com/Uploads/html-css.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.w3docs.com/uploads/media/default/0001/05/4482fe09d95a0be765154b9cefff5e07f7fc32ff.png"
                            alt="Second slide"
                        />


                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://miro.medium.com/max/700/1*dLaDL-lSN0iprzmOpmM7zQ.png"
                            alt="Third slide"
                        />


                    </Carousel.Item>

                </Carousel>


            </div>

            <div className='my-5 container'>
                <div className="row shadow-lg d-flex align-items-center">
                    <div className="col-md-6  text-success">
                        <h2 className='my-4'>Skill</h2>
                        <p style={{ fontSize: '20px' }}>Whether you're a professional or a graduate, in your job hunt, your skills matter. They tell potential employers what you can do, how you can do it, and even who you are</p>
                    </div>

                    <div className="col-md-6">
                        <img className='img-fluid' src="https://miro.medium.com/max/1200/1*DYgmXq4NlR8Hp1_tReThGQ.jpeg" alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;