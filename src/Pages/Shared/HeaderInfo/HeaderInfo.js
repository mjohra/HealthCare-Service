import React from "react";
import "./HeaderInfo.css";

const HeaderInfo = () => {
  return (
    <>
      <div className="mt-3">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 col-12">
              <div className="second-part">
                <h1>
                  <i className="icon far fa-clock"></i>
                </h1>
                <div className="ms-3">
                  <p>Monday-Sunday<br />
                  24/7 Open</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="third-part">
                <h1>
                  <i className="icon fas fa-mobile-alt"></i>
                </h1>
                <div className="ms-3">
                  <p>+0800 2336 7811 <br />
                  Office@Medicare.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="fourth-part">
                <h1>
                  <i className="icon fas fa-map-marker-alt"></i>
                </h1>
                <div className="ms-3">
                  <p>27th Avenue <br />
                  Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderInfo;
