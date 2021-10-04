import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faStickyNote, faFolder, faTasks, faInfinity, faMobile, faCertificate, faShoppingCart, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const EachCourse = (props) => {

    const { img, name, fees } = props.course;
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name.slice(0, 25)}</h3>
                    <h5>Fees: <span className="text-danger">${fees}</span></h5>
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
                <button type="button" className="btn btn-danger">Enroll Now</button>
            </div>
        </div>
    );
};

export default EachCourse;