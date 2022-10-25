import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({ course }) => {
    const { title, image, description } = course;
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {
                            description.length > 200 ?
                                <>
                                    {description.slice(0, 150) + '.....'}
                                </>
                                :
                                <>
                                    {description}
                                </>
                        }

                    </p>
                </div>

                <div className="card-footer">
                    <Link to={`/courses/${course.id}`} className='text-decoration-none' >
                        <button className='btn btn-success d-block w-100'>Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleCourse;