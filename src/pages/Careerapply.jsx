import React from "react";
import { Link } from "react-router-dom";
import "./Careerapply.css";

const Apply = () => {
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <div className="checkmark">&#10003;</div>
        <h1>Thank You for showing interest in working with us.  </h1>
        <p>We will get back to you once we find suitable positions for you!!</p>
        <Link to="/" className="home-link">Go To Home</Link>
      </div>
    </div>
  );
};

export default Apply;
