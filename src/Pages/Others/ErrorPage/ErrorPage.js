import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h1 className='display-1'>Opps !</h1>
                <h2 className='display-3'>404 Error</h2>
                <Link to='/'> <button className='btn btn-success'>Go Back to Home Page</button> </Link>
            </div>

        </div>
    );
};

export default ErrorPage;