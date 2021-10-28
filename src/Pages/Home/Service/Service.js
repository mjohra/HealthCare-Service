import React from "react";
import { Link } from "react-router-dom";
import './Service.css';

const Service = (props) => {
  const { name, image, description,id } = props.product || {};
  return (
    <div className="col-md-6 col-lg-4 col-12 mb-4">
      <div className="card card-details shadow-lg">
        <img
          src={image}
          className="card-img-top card-img p-3 w-100"
          alt="..."
        />
        <div className="card-body ">
          <h1 className="card-title text-center">{name}</h1>
          <p className="card-text">
            {description}
          </p>
          <Link to={`/servicedetails/${id}`}><button className="view px-3 py-1 mb-2">View More</button></Link>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
