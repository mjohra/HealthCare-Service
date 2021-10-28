import React from 'react';
import doctor from '../../images/doctor4.jpg';

const DetailAbout = () => {
    return (
        <div>
            <div className="mt-5 mb-5 container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h1 className="text-center mt-5 title">Welcome To HealthCare</h1>
                        <h1 className="text-center mt-2 text-success">About Us</h1>
                        <h3 className="text-center mt-1 mb-2">Establishment</h3>
                        <p className="mt-1">Our great Rampura Banasree is now well-populated area. It has now been transferred into a model town with super malls, schools, colleges, and universities, but the healthcare specially the Hospital Diagnostic center has not been established up to standard level till now. Though some private healthcare services are establish here but none of them can serve the emergency treatment to the patients. In the year 2012, 1st March, HealthCare Diagnostic Hospital Ltd. going to establish, with the promise to give the best and modern healthcare facilities to the people of newly developed Rampura Banasree, South Banasree, Aftabnagar, Badda, Bashabo, Meradia etc. Providing the people with healthcare as needed. We hope gradually with your support we will reach to high standard healthcare service.</p>
                        <h3 className="text-center mt-2">Mission</h3>
                        <p className="mt-1">Our mission is to care for patient compassionately effectively, with the highest medical standards. We seek to improve the ways in which healthcare is organized delivered in our society, so as to bring care within the reach of many people as possible.</p>
                        <h3 className="text-center mt-2">Vission</h3>
                        <p className="mt-1">To create a global standard in healthcare with commitment, integrity, compassion, team work and social responsibility, using the most advanced medical technology, where the patient delight is our fundamental goal.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <img className="w-100" src={doctor} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DetailAbout;