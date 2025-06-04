import React from "react";
import { Link } from "react-router-dom";
import "./Thankyou.css";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <div className="checkmark">&#10003;</div>
        <h1>Thank You</h1>
        <p>We will get in touch with you soon.</p>
        <Link to="/" className="home-link">Go To Home</Link>
      </div>
    </div>
  );
};

export default ThankYou;
