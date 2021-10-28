import React from "react";
import person1 from "../../../images/pic-team-1.jpg";
import person2 from "../../../images/pic-team-2.jpg";
import person3 from "../../../images/pic-team-3.jpg";
import person4 from "../../../images/pic-team-4.jpg";

import "./Teams.css";

const Teams = () => {
  return (
    <div id="team" className="container">
      <h1 className="text-dark text-center title">Our Team</h1>
      <div className="teams row p-5">
        <div className="col-md-3 col-12 text-center mt-2">
          <div className="card d-inline-block shadow-lg">
            <div className="card-img-top">
              <img src={person1} className="img-fluid p-4" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Prof. Dr. AKM Fazlul Haque</h3>
              <p className="card-text">
                Dr. Mohammad Jahangir Talukder is a reputed Internal Medicine
                specialist in Bangladesh. He is experienced in the treatment of
                Acute medical emergency, Respiratory, Endocrine, and Infectious
                diseases. He has a long 40 years’ experience in this field. He
                successfully completed his MBBS from MAG Osmani Medical College,
                Sylhet under Chittagong University in 1978. After he
                successfully finished.
              </p>
              <p className="text-black-50">CEO</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 text-center">
          <div className="card d-inline-block shadow-lg">
            <div className="card-img-top">
              <img src={person2} className="img-fluid p-4" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Professor Dr. Mahbub H Khan</h3>
              <p className="card-text">
                Professor Dr. Mahbub H Khan is one of the most reputed Liver and
                Gastroenterology specialists in Bangladesh. He completed his
                MBBS with the highest-ranking result. He was awarded Leo Gold
                Medal for first place in the third professional examination
                among the students of Sir Salimullah, Mymensing, and
                Sher-E-Bangla Medical colleges of Bangladesh.Dr. Mahbub H Khan
                has some research papers including “Hepatology”
              </p>
              <p className="text-black-50">Chairman</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 text-center">
          <div className="card d-inline-block shadow-lg">
            <div className="card-img-top">
              <img src={person3} className="img-fluid p-4" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Dr. Mohammad Jahangir Talukder</h3>
              <p className="card-text">
                Dr. Mohammad Jahangir Talukder is a reputed Internal Medicine
                specialist in Bangladesh. He is experienced in the treatment of
                Acute medical emergency, Respiratory, Endocrine, and Infectious
                diseases. He has a long 40 years’ experience in this field. He
                successfully completed his MBBS from MAG Osmani Medical College,
                Sylhet under Chittagong University in 1978. After he
                successfully finished.
              </p>
              <p className="text-black-50">Head Of Department</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 text-center">
          <div className="card d-inline-block shadow-lg">
            <div className="card-img-top">
              <img src={person4} className="img-fluid p-4" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">
                Brigadier General Nurunnahar Fatema{" "}
              </h3>
              <p className="card-text">
                Brigadier General Professor Nurunnahar Fatema Begum is the first
                ever Paediatric Cardiologist of Bangladesh and a Brigadier
                General under the Bangladesh Army. In 2019, she was awarded both
                the Independence Day Award and the Shena Bahini Podok for her
                irreplaceable contribution to the field of Paediatric
                medicine.Dr. Brigadier General Professor Nurunnahar Fatema Begum
                is the first Paediatric Cardiologist.
              </p>
              <p className="text-black-50">Vice Chairman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
