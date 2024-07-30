import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer-content">
          <div className="logo-section">
            <img
              src="\images\logo_black.png"
              alt="Apollo Automation"
              className="logo_black"
            />
          </div>
          <div className="footer-sections">
            <div className="quick-links">
              <h3>QUICK LINKS</h3>
              <ul>
                <li>FAQ</li>
                <li>Articles</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="contact-info">
              <h3>CONTACT INFO</h3>
              <ul>
                <li>
                  {" "}
                  <span className="map-icon">
                    <img src="\images\map icon.png" />{" "}
                    <span>Email: info@Apollo-Cybersecurity.com</span>
                  </span>{" "}
                </li>
                <li>
                  {" "}
                  <span className="mail-icon">
                    <img src="\images\mail-icon.png" />{" "}
                    <span>8 West 126th Street New York, NY 10027</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <h1>Get In Touch With Us</h1>
              <p>
                Looking for more information? Fill out the form below and one of
                our team members will reach out to answer any questions you
                might have.
              </p>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last name" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Enter email address" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Write a message"></textarea>
                </div>
                <div className="form-btn-alignment">
                  <button type="submit">REQUEST CALLBACK</button>
                  <div className="social-media">
                    <p>Follow us</p>
                    <a href="#instagram" className="social-icon">
                      <FaInstagram style={{ color: "#000" }} />
                    </a>
                    <a href="#twitter" className="social-icon">
                      <FaTwitter style={{ color: "#000" }} />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright &copy; 2023 Apollo Automation. All Rights Reserved.</p>
          <p>Website Powered by Simple SEO Group</p>
          <div className="privacy-terms">
            <a href="#privacy-policy">Privacy Policy</a> |{" "}
            <a href="#terms-conditions">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
