import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div className='container my-5 border p-5 '>
            <h3>Checkout</h3>

            <div className="mb-3">
                <label className="form-label">Student Name</label>
                <input type="text" className="form-control" value={user.displayName} disabled />
            </div>

            <div className="mb-3">
                <label className="form-label">Course Name</label>
                <input type="text" className="form-control" value={course.title} disabled />
            </div>

            <div className="mb-3">
                <label className="form-label">Course Price</label>
                <input type="text" className="form-control" value={course.price} disabled />
            </div>

            <button onClick={() => toast("Successfully enroll course")} type="text" className="btn btn-success d-block w-100">Enroll</button>
        </div>
    );
};

export default Checkout;