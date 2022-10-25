import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SIngleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='container'>
            <div className="row">

                {/* right side */}
                <div className="col-md-3 d-block gap-2 my-5">
                    <h3 className='text-center mb-3 '>Courses</h3>
                    {
                        courses.map((course) => <Link key={course.id} to={`/courses/${course.id}`} className='text-decoration-none' >
                            <button className='btn btn-success d-block w-100 my-3 '>{course.title} </button>
                        </Link>)
                    }

                </div>


                {/* left side */}
                <div className="col-md-9  my-5">
                    <h3 className='text-center mb-3'>Our Feature Course</h3>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                            courses.map(course => <SingleCourse key={course.id} course={course} ></SingleCourse>)
                        }

                    </div>
                </div>


            </div>

        </div>
    );
};

export default Courses;