import React from 'react'

const Footer = () => {
  return (
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        </div>

        <div className="footer-links">
          <div className='link-column'>
            <h3>About Us</h3>
            <ul>
              <li>< a href='#why us'>Why Us</a></li>
              <li>< a href='#privacy terms'>Privacy Terms</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Portfolio</h3>
            <ul>
              <li><a href="#sales crm">Sales CRM</a></li>
              <li><a href="#marketing jobverse">Marketing Jobverse</a></li>
              <li><a href="#uthsav">Uthsav</a></li>
              <li><a href="#learning platform">Learning platform</a></li>
              <li><a href="#profitabill">Profitabill</a></li>
              <li><a href="#baabee">Baabee Tv</a></li>
              <li><a href="#inesh">Inesh</a></li>
              <li><a href="#political">Political App</a></li>
              <li><a href="#farmyung club app">Farmyng Club App</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Offerings</h3>
            <ul>
              <li><a href="#Products">Products</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Web App">Web App</a></li>
              <li><a href="# Development">Development</a></li>
              <li><a href="#Mobile App">Mobile App </a></li>
              <li><a href="#Development">Development</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Careers</h3>
            <ul>
              <li><a href="#">We are hiring!</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h1>CyberMind Works LLP</h1>
            <ul>
              <li><a href="mailto:info@cybermindworks.com"><br />
                10/15 K.M Towers - 1st Floor, Chakrapani Road,<br />
                Guindy, Chennai, Tamil Nadu, 60004</a></li>
              <li><a href="tel:+1234567890">ph: +01 75000 53535</a></li>
              <li><a href='#'>www.cybermindworks.com</a></li>
              <li><a href="mailto:info@cybermindworks.com">contact@cybermindworks.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2025, CyberMind Works | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer