import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../logo/logo.png";
import ".//Navbar.css"


const Navbar = () => {


    return (
        <div className="sticky-top bg-dark text-light">
            <Container>
                <Row className="flex-box">

                    {/* logo */}
                    <Col xs={12} md={8}>
                        <div className="d-flex align-items-center">
                            <img className="logo-size" src={logo} alt="" />
                            <h5>MMA<br /> CLUB</h5></div>

                    </Col>

                    {/* nav-links */}
                    <Col className="nav" xs={6} md={4}>
                        <NavLink activeStyle={{
                            color: "red"
                        }} className="nav-links text-light"
                            to="/home"
                        >
                            Home
                        </NavLink>
                        <NavLink activeStyle={{
                            color: "red"
                        }} className="nav-links text-light"
                            to="/services"
                        >
                            Services
                        </NavLink>
                        <NavLink activeStyle={{
                            color: "red"
                        }}
                            className="nav-links text-light"
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink activeStyle={{
                            color: "red"
                        }}
                            className="nav-links text-light"
                            to="/contact"
                        >
                            Contact us
                        </NavLink>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Navbar;