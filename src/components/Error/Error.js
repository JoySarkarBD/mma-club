import React from 'react';
import error from '../../logo/404-error.jpg'

const Error = () => {
    return (
        <div className="d-flex justify-content-center">
            <img className="w-50" src={error} alt="" />
        </div>
    );
};

export default Error;