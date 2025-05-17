import React from 'react';
import './Bcontact.css';

const Info = () => {
  return (
    <section className="contact-section">
      <h1>Contact</h1>
      <p>Got something to ask?</p>
      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h2 className="gradient-text">CyberMind Works</h2>
          <p>Have something to say? We are here to help. Fill<br />
           up the form or send email or give us a call.</p>
          <p>📍 10/15, K.M Towers - 1st Floor, Chakrapani Road,<br />Guindy, Chennai, Tamil Nadu, 600042</p>
          <p>📧 contact@cybermindworks.com</p>
          <p>📞 +91 75000 53535</p>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Contact Number" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </div>
      </div>

      <footer className='foot'>Copyright © 2025 CyberMind Works. All rights reserved.</footer>
    </section>
  );
};

export default Info;
