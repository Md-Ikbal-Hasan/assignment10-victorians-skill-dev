import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const SingleCourse = ({ course }) => {
    const { title, image, description } = course;
    console.log("single course:", course)
    return (
        <div class="col">
            <div class="card">
                <img src={image} class="card-img-top" alt="..." style={{ height: "200px" }} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
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

                <div class="card-footer">
                    <button className='btn btn-success'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;