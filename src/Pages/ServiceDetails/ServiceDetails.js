import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [pd, setPd] = useState([]);
  useEffect(() => {
    fetch("/detailservice.json")
      .then((res) => res.json())
      .then((data) => setPd(data));
    
  }, []);
  const [desiredService, setDesiredService] = useState([]);

  useEffect(() => {
    const foundService = pd.find((service) => {
        console.log(service.id,serviceId);
      return service.id === parseInt(serviceId);
    });
    setDesiredService(foundService);
  }, [pd, serviceId]);
  console.log(pd);
  console.log(desiredService);
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-12 col-12 text-center p-5">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={desiredService?.image} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">{desiredService?.name}</h2>
                  <h5 className="card-text">
                 {desiredService?.description}
                  </h5>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
