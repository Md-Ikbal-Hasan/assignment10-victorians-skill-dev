import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SIngleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <div className='container'>
            <div className="row">

                {/* right side */}
                <div className="col-md-3 d-block gap-2 my-5">
                    <h3 className='text-center'>Courses</h3>
                    {
                        courses.map((course) => <button className='btn btn-success'> {course.title} </button>)
                    }

                </div>


                {/* left side */}
                <div className="col-md-9 border">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            courses.map(course => <SingleCourse course={course} ></SingleCourse>)
                        }

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Courses;