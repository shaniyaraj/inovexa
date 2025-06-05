import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo"></div>

        <div className="footer-links">

          <div className='link-column'>
            <h3>About Us</h3>
            <ul>
              <li><Link to="/why-us">Why Us</Link></li>

              <li><Link to="/privacy-terms">Privacy Terms</Link></li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Offerings</h3>
            <ul>
              
              <li><Link to="/products/profitabill">Products</Link></li>

              <li><Link to="/services">Services</Link></li>
              <li><Link to="/web">Web App</Link></li>
              <li><Link to="/mobile">Mobile App</Link></li>

            </ul>
          </div>

          <div className="link-column">
            <h3>Careers</h3>
            <ul>
              <li><Link to="/careers">We are hiring!</Link></li>
            </ul>
          </div>

          <div className="link-column">
            <h1>Inovexa</h1>
            <ul>
              <li>
                {/* <a href="mailto:info@inovexa.com"> */}
                  {/* <p>
                     10, M.G Road, Bangalore,<br /> Karnataka, 560001</p>
                {/* </a> */}
              </li>
              {/* <li><a href="tel:+917500053535">PH: +91 75000 53535</a></li> */}
              {/* <p>PH: +91 75000 53535</p> */}
              {/* <li><a href="https://www.inovexa.com" target="_blank" rel="noopener noreferrer">www.inovexa.com</a></li> */}
              <li>www.inovexa.in</li>
              <li><a href="mailto:contact@inovexa.com">contact@inovexa.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2025, Inovexa | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
