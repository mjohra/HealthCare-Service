import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css';

const Services = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/service.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="services" className="container">
      <h1 className="text-center mt-5 mb-3 title">Our Services</h1>
      <div className="row p-5">
        {/* product load */}
        {products.map((product) => (
          <Service key={product.id} product={product}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
