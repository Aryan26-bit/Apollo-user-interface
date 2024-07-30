import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [activeButton, setActiveButton] = useState("getInTouch");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const textToType = "Apollo Automation";

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  useEffect(() => {
    const typingSpeed = 100;
    const pauseDuration = 2000;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (typedText.length < textToType.length) {
          setTypedText(textToType.substring(0, typedText.length + 1));
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setTypedText("");
            setIsTyping(true);
          }, pauseDuration);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    }
  }, [typedText, isTyping]);

  return (
    <div className="homepage-container">
      <nav className="homepage-navbar">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#article">Article</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div>
          <img
            src="\images\logo_white.png"
            width="120%"
            height="70%"
            alt="Logo"
          />
        </div>

        <div className="homepage-button-container">
          <button
            id="getInTouch"
            className={`button ${
              activeButton === "getInTouch"
                ? "blue-button active"
                : "black-button"
            }`}
            onClick={() => handleClick("getInTouch")}
          >
            GET IN TOUCH
          </button>
          <button
            id="requestCallback"
            className={`button ${
              activeButton === "requestCallback"
                ? "blue-button active"
                : "black-button"
            }`}
            onClick={() => handleClick("requestCallback")}
          >
            REQUEST CALLBACK
          </button>
        </div>
      </nav>
      <div className="homepage-hero">
        <h1>
          Experience the Future with
          <br />
          <span className="bydefault-typed-text"> {typedText}</span>
          <span className="blinking-cursor">|</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
