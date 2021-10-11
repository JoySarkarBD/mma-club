import React from 'react';
import img from '../logo/img-1.jpg'

const About = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row d-flex">
                    <div className="col">
                        <h1>About <span className="text-danger">Us</span></h1>
                        <p>Self-defense is so important to know in today's society. It's not just that you might get mugged. It's more for confidence. It's the way you hold yourself when you walk into a room. Every step you take is more sure and you're much more aware of your surroundings. So, I think it's a really important thing - especially for women.</p>
                    </div>
                    <div className="col">
                        <div><img className="w-100" src={img} alt="" /></div>
                    </div>
                </div> </div>
        </div>
    );
};

export default About;