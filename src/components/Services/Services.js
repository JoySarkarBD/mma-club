import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faStickyNote, faFolder, faTasks, faInfinity, faMobile, faCertificate, faShoppingCart, } from '@fortawesome/free-solid-svg-icons'

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

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {courses.map(course =>
                        <div className="col">
                            <div className="card">
                                <img src={course.img} className="card-img-top img-size" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.name.slice(0, 25)}</h5>
                                    <h5>Fees: ${course.fees}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><FontAwesomeIcon icon={faYoutube} /> 26.5 hours on-demand video</li>
                                        <li className="list-group-item"><FontAwesomeIcon icon={faStickyNote} /> 13 articles</li>
                                        <li className="list-group-item"><FontAwesomeIcon icon={faFolder} /> 1 downloadable resource</li>
                                        <li className="list-group-item"><FontAwesomeIcon icon={faTasks} /> 1 practice test</li>
                                        <li className="list-group-item"><FontAwesomeIcon icon={faInfinity} /> Full lifetime access</li>
                                        <li className="list-group-item"><FontAwesomeIcon icon={faCertificate} /> Certificate of completion</li>
                                        <li className="list-group-item"><FontAwesomeIcon icon={faMobile} /> Access on mobile and TV</li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-primary"><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
                                <button type="button" className="btn btn-success">Enroll Now</button>
                            </div>
                        </div>)}

                </div>
            </div>





        </div >
    );
};

export default Services;