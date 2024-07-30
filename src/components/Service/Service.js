import React from "react";
import "./service.css";
import servicesData from "./../../dummyData/services.json";

const Service = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <div className="left-section-service">
          <h2>
            Key Services <span>→</span>
          </h2>
          <h1>Overview of main services offered</h1>
          <p>
            At Apollo Cybersecurity, innovation is engrained in our DNA. Our
            automation and AI experts develop industry-disrupting technologies
            tailored to your organization's goals.
          </p>
        </div>
        <div className="right-section-service">
          {servicesData.map((service) => (
            <div key={service.id} className="service-item">
              <img src={service.image} alt={service.title} />
              <div>
                <h3 className="card-title-text">{service.title}</h3>
                <p className="card-title-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
