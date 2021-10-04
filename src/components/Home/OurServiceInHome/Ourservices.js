import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Ourservices = (props) => {
    const { name, img, description, fees } = props.course;
    return (
        <div>
            <Card.Img className="img-size" variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h3>Fees: ${fees}</h3>
                <Card.Text>
                    {description.slice(0, 200)}
                </Card.Text>
                <NavLink to="/"> Read more...</NavLink>
            </Card.Body>
        </div>
    );
};

export default Ourservices;