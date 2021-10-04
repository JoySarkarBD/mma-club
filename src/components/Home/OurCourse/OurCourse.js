import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const OurCourse = (props) => {
    const { name, img, description, fees } = props.course;
    return (
        <div>
            <Card.Img className="img-size" variant="top" src={img} />
            <Card.Body>
                <Card.Title> <h2>{name}</h2></Card.Title>
                <h5>Fees: <span className="text-danger">${fees}</span></h5>
                <Card.Text>
                    {description.slice(0, 200)}
                </Card.Text>
                <button className="btn btn-danger">Read more</button>
            </Card.Body>
        </div>
    );
};

export default OurCourse;