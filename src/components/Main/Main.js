import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="who-we-are">
      <div className="left-section">
        <h2>
          Who We Are <span>→</span>
        </h2>
        <div className="stats">
          <div className="stat">
            <h3 className="main-page-text">70+</h3>
            <p>Professional Experts</p>
          </div>
          <div className="stat">
            <h3 className="main-page-text">20+</h3>
            <p>Customers</p>
          </div>
          <div className="stat">
            <h3 className="main-page-text">65+</h3>
            <p>Years of History</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <h1 className="main-page-shape-text">
          <span>
            <img src="\images\shape.png" />
          </span>
          Your Vision, Our Technology Building a <br />
          Smarter Future
        </h1>
        <div className="mission-vision">
          <div className="image-container">
            <img src="\images\card_img.png" alt="Robotics" />
          </div>
          <div className="text-container">
            <h2>Our Mission</h2>
            <p>
              At Apollo Automation, our mission is to disrupt industries with
              technology, creating an intelligent and efficient future through
              the fusion of artificial intelligence and robotics. With tailored
              solutions in industrial automation, IoT devices, robotics,
              automated conveyors, and tailored applications,
            </p>
            <h2>Our Vision</h2>
            <p>
              We proudly spearhead innovation, driving the global transformation
              of industries. Our passion revolves around crafting solutions that
              seamlessly integrate intelligent automation into everyday
              workflows, elevating productivity, and generating revenue for our
              partners.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
