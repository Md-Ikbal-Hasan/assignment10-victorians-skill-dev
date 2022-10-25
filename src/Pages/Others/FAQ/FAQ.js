import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const FAQ = () => {
    return (
        <div className='container'>







            <div className="row  my-5 g-0">
                <div className="col-md-6">
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />

                </div>

                <div className="col-md-6 shadow-lg">

                    <Form className=' p-5 '>
                        <h3 className='mb-2'>Feel Free to Contact With Us</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as='textarea' placeholder="Your Message....." style={{ height: '100px' }} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>


                </div>
            </div>
        </div>
    );
};

export default FAQ;