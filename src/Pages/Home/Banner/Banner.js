import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/doctor-1.jpg";
import banner2 from "../../../images/doctor2.jpg";
import banner3 from "../../../images/doctor-3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Carousel id="home">
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
