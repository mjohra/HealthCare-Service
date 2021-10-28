import React from 'react';
import { Link } from 'react-router-dom';
import doctor from '../../../images/doctor4.jpg';

const About = () => {
    return (
        <div id="about">
            <div className="container text-center mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h1 className="text-center mt-5 title">About Us</h1>
                        <h3 className="text-center mt-1">Establishment</h3>
                        <p className="text-center mt-1">Our great Rampura Banasree is now well-populated area. It has now been transferred into a model town with super malls, schools, colleges, and universities, but the heal..</p>
                        <Link to={'/detailabout'}><button className="view-more text-center mt-1">Read More</button></Link>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="w-100" src={doctor} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;