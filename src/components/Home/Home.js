import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import './Home.css';
import logoSlide from '../logo/img-1.jpg'
import logoSlideTwo from '../logo/img-2.jpg'
import logoSlideThree from '../logo/img-3.jpg'
import OurCourse from './OurCourse/OurCourse';


const Home = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <div>
            {/* slider */}
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logoSlide}
                            alt="First slide"
                        />
                        <Carousel.Caption className="position">

                            <h1>Be alert.</h1>
                            <p>The essential thing is to bear always in mind that trouble can appear at any time.
                                Be aware.Be ready.Be alert.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"d-block w-100"}
                            src={logoSlideTwo}
                            alt="Second slide"
                        />

                        <Carousel.Caption className="position">
                            <h3>Self-defense</h3>
                            <p>Self-defense is not just a set of techniques; it’s a state of mind, and it begins with the belief that you are worth defending.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={logoSlideThree}
                            alt="Third slide"
                        />

                        <Carousel.Caption className="position">
                            <h3>Protect your self</h3>
                            <p>Self-defense is so important to know in today's society. It's not just that you might get mugged. It's more for confidence. It's the way you hold yourself when you walk into a room. Every step you take is more sure and you're much more aware of your surroundings. So, I think it's a really important thing - especially for women.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* service section */}
            <div className="mt-5">
                <div>
                    <h1 className="mb-5 text-center">Our <span className="text-danger">Courses</span></h1>
                </div>
                <div className="container mb-5">
                    <Row xs={1} md={2} className="g-4">

                        {courses.map(course => <Col>
                            <Card style={{ height: "300 px" }}>
                                <OurCourse key={course.id} course={course} ></OurCourse>
                            </Card>
                        </Col>).slice(0, 4)
                        }
                    </Row>
                </div>

            </div>
        </div>
    );
};

export default Home;