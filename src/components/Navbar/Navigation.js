import React from 'react';
import { NavLink } from 'react-router-dom';
import navIcon from "../logo/logo.png"

import "./Navigation.css"
const Navigation = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container row">
                    <div className="col-md-4">
                        <a className="navbar-brand d-flex justify-content-center align-items-center" href="/"><img className="w-25" src={navIcon} alt="" /><h3>MMA CLUB</h3></a>
                    </div>
                    <div className="col-md-4"></div>
                    <button className="navbar-toggler w-25 m-auto float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/home"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    Home
                                </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/courses"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    Courses
                                </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/services"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    Services
                                </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/about"
                                    activeStyle={{
                                        color: "red"
                                    }}
                                >
                                    About
                                </NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/"><NavLink
                                    className="ms-4 text"
                                    to="/contact"
                                    activeStyle={{

                                        color: "red"
                                    }}
                                >
                                    Contact
                                </NavLink></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;