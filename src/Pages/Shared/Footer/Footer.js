import React from "react";
import "./Footer.css";

const Footer = () => {
  return ( 
<div className="footer container-fluid p-7">
<div className="row text-left">
  <div className="col-md-5 col-sm-5">
    <h4 className="text-light">About us</h4>
    <p className="text-muted">Our great Rampura Banasree is now well-populated area. It has now been transferred into a model town with super malls, schools, colleges, and universities</p>
    <p className="pt-4 text-muted">Copyright ©2021 All rights reserved | This template is made with by
      <span> Mehjabin Johra</span>
    </p>
  </div>
  <div className="col-md-5 col-sm-12">
    <h4 className="text-light">Newsletter</h4>
    <p className="text-muted">Stay Updated</p>
    <form className="form-inline">
      <div className="col pl-0">
        <div className="input-group pr-5">
          <input type="text" className="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email"/>
          {/* <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-arrow-right fa-2x"></i>
            </div>
          </div> */}
          <div className="btn google-btn">Submit</div>
        </div>
      </div>
    </form>
  </div>
  <div className="col-md-2 col-sm-12">
    <h4 className="text-light">Follow Us</h4>
    <p className="text-muted">Let us be social</p>
    <div className="column text-light pt-2">
      <i className="fab fa-facebook-f fa-2x pe-2"></i>
      <i className="fab fa-instagram fa-2x pe-2"></i>
      <i className="fab fa-twitter fa-2x pe-2"></i>
      <i className="fab fa-youtube fa-2x"></i>
    </div>
  </div>
</div>
</div>
  );
};

export default Footer;
