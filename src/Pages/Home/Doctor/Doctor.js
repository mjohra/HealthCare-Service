import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = (props) => {
    const { name, image, specialized,id } = props.doctor || {};
    return (
        <div className="col-md-4 col-12 text-center">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={image} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                 {specialized}
                  </p>
                  <Link to={`/doctordetails/${id}`}><button className="view-more mb-2">View More</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Doctor;