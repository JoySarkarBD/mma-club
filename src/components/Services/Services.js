import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="text-center mt-5 mb-5">
                <h1>Our <span className="text-danger">Services</span></h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 container mb-5 mx-auto">

                <div className="col ">
                    <div className="card ">
                        <img src="https://demo-images.netlify.app/teach/1.png" className="card-img-top w-25 mx-auto" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center">24/7 <span className="text-danger ">Support</span></h2>
                            <p className="card-text">24/7 Online Support - We always listen to our students. Our team is always there to help them whenever they have a problem.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <img src="https://demo-images.netlify.app/teach/4.png" className="card-img-top w-25 mx-auto" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center pb-4">Class <span className="text-danger ">Video</span></h2>
                            <p className="card-text">
                                Get practical lectures and classes recorded as videos. This will create a better storage of materials for the future. And you can practice at home with these materials.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card ">
                        <img src="https://demo-images.netlify.app/teach/6.png" className="card-img-top w-25 mx-auto" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title text-center">Job <span className="text-danger ">Opportunity </span></h2>
                            <p className="card-text">Gain exclusive opportunity to work in the international market as an expert freelancer. CITI creates opportunities by adding value to your career.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Services;