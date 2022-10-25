import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import { toast } from 'react-toastify';



const CourseDetails = () => {
    const course = useLoaderData();
    const { id, title, image, description, rating, enrolled, price } = course;

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'enrolled-course',
        onAfterPrint: () => toast("pdf download successfully")
    })


    return (
        <div className='container'>


            <div className='text-center my-2'>
                <button onClick={handlePrint} className='btn btn-success fw-bold  '>Download Course Details</button>
            </div>





            <h2 className='text-center mb-2'>Course Details</h2>
            <div className="card w-75 mx-auto my-3 " ref={componentRef}  >
                <img src={image} className="card-img-top img-fluid w-100" alt="..." style={{ height: '500px' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                    </p>

                    <div className='d-flex align-items-center mb-1'>
                        <b>Raings</b>: {rating}
                        <FaStar className='text-danger ms-1' />
                    </div>

                    <div className='mb-1'> <b>Enrolled</b>: {enrolled} students </div>
                    <div> <b>Price: </b> {price}  </div>
                </div>

                <div className="card-footer">
                    <Link className='text-decoration-none' to={`/checkout/${id}`} >
                        <button className='btn btn-success d-block w-100 fw-bold'>Get Premium Access</button>

                    </Link>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;