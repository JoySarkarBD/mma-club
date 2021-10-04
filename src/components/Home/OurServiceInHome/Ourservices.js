import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Ourservices = (props) => {
    const { name, img, description} = props.course;
    return (
        <div>
            <div>

                <Card.Img className="img-size" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 200)}
                    </Card.Text>
                    <NavLink to="/"> Read more...</NavLink>
                </Card.Body>

            </div>
        </div>
    );
};

export default Ourservices;