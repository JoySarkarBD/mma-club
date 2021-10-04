import React, { useEffect, useState } from 'react';
import EachCourse from '../EachCourse/EachCourse';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <h2>Our <span className="text-danger">Courses</span></h2>
            </div>

            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {courses.map(course =>
                        <div className="col">
                            <EachCourse
                                key={course.key}
                                course={course}
                            >
                            </EachCourse>
                        </div>)}

                </div>
            </div>





        </div >
    );
};

export default Courses;