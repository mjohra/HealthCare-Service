import React from "react";
import "./Details.css";

const Details = () => {
  return (
    <div id="about">
      <div className="cover">
        <div className="content text-center">
          <h1 className="title">Some Information About Us</h1>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div className="rect">
            <h1>24</h1>
            <h5>
              <i className="icon far fa-hospital"></i> Our Departments
            </h5>
          </div>
          <div className="rect">
            <h1>15</h1>
            <h5>
              <i className="icon fas fa-hand-holding-medical"></i> Our Services
            </h5>
          </div>
          <div className="rect">
            <h1>63</h1>
            <h5>
              <i className="icon fas fa-user-md"></i> Our Doctors
            </h5>
          </div>
          <div className="rect">
            <h1>4</h1>
            <h5>
              <i className="icon fas fa-notes-medical"></i> Our Packages
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
