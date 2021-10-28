import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const [pod, setPod] = useState([]);
  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setPod(data));
  }, []);
  const [desiredDoctor, setDesiredDoctor] = useState([]);

  useEffect(() => {
    const foundService = pod.find((service) => {
    //   console.log(service.id, doctorId);
      return service.id === parseInt(doctorId);
    });
    setDesiredDoctor(foundService);
  }, [pod, doctorId]);
//   console.log(pod);
//   console.log(desiredDoctor);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12 p-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={desiredDoctor?.image}
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="col-md-8 mt-5 ps-5">
                <div className="card-body">
                  <h1 className="card-title">Name: {desiredDoctor?.name}</h1>
                  <hr />
                  <h3 className="card-text">Designation: {desiredDoctor?.Designation}</h3>
                  <hr />
                  <h4 className="card-text">Department: {desiredDoctor?.Department}</h4>
                  <hr />
                  <h5 className="card-text">Specialized: {desiredDoctor?.specialized}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
