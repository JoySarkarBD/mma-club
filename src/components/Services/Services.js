import React, { useEffect, useState } from 'react';
import EachService from '../../components/EachService/EachService';

const Services = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className="mt-5 mb-5 text-center">
                <h2>Our Services</h2>
            </div>

            <div className="container mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {courses.map(course =>
                        <div className="col">
                            <EachService
                                key={course.key}
                                course={course}
                            >
                            </EachService>
                        </div>)}

                </div>
            </div>





        </div >
    );
};

export default Services;