import React from "react";
import new1 from "../../../images/news-1.jpg";
import new2 from "../../../images/news-2.jpg";
import new3 from "../../../images/news-3.jpg";
import './Blog.css'


const Blog = () => {
  return (
    <div id="blog" className="container">
      <h1 className="text-center mb-5 mt-5 title">LATEST BLOG</h1>
      <div className="team row p-5">
        <div className="col-md-4 col-12 ">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={new1} className="img-fluid pt-4 " alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Pfizer-BioNTech ask EU agency to OK vaccine for kids 5-11</h5>
                  <p className="card-text">
                  Pharmaceutical company Pfizer BioNTech said Friday they have requested to have their coronavirus vaccine licensed for children ages 5 to 11 across the European Union.Pfizer-BioNTech ask EU agency to OK vaccine for kids 5-11
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    Written by Mehjabin Mouri.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4 text-center">
                <img src={new2} className="img-fluid pt-4" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Breast cancer in younger women: How does it manifest?</h5>
                  <p className="card-text">
                  News reports of singer Sarah Harding’s death at the age of 39 years in early September 2021 following a late breast cancer diagnosis breast cancer.Breast cancer in younger women: How does it manifest
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    Written by Kimberly Drake
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={new3} className="img-fluid pt-4" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Linking sleep disturbance with depression, anxiety, bipolar disorder, schizophrenia</h5>
                  <p className="card-text">
                  A diverse, multidisciplinary team of scientists worked on a creative research design to uncover sleep patterns in people living with mental health conditions or a genetic predisposition to them.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    Written by Mary McGorray, M.D.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
