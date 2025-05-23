// import React from 'react'

// const Footer = () => {
//   return (
//       <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">
//         </div>

//         <div className="footer-links">
//           <div className='link-column'>
//             <h3>About Us</h3>
//             <ul>
//               <li>< a href='#why us'>Why Us</a></li>
//               <li>< a href='#privacy terms'>Privacy Terms</a></li>
//             </ul>
//           </div>
//           <div className="link-column">
//             <h3>Portfolio</h3>
//             <ul>
//               <li><a href="#sales crm">Sales CRM</a></li>
//               <li><a href="#marketing jobverse">Marketing Jobverse</a></li>
//               <li><a href="#uthsav">Uthsav</a></li>
//               <li><a href="#learning platform">Learning platform</a></li>
//               <li><a href="#profitabill">Profitabill</a></li>
//               <li><a href="#baabee">Baabee Tv</a></li>
//               <li><a href="#inesh">Inesh</a></li>
//               <li><a href="#political">Political App</a></li>
//               <li><a href="#farmyung club app">Farmyng Club App</a></li>
//             </ul>
//           </div>

//           <div className="link-column">
//             <h3>Offerings</h3>
//             <ul>
//               <li><a href="#Products">Products</a></li>
//               <li><a href="#Services">Services</a></li>
//               <li><a href="#Web App">Web App</a></li>
//               <li><a href="# Development">Development</a></li>
//               <li><a href="#Mobile App">Mobile App </a></li>
//               <li><a href="#Development">Development</a></li>
//             </ul>
//           </div>
//           <div className="link-column">
//             <h3>Careers</h3>
//             <ul>
//               <li><a href="#">We are hiring!</a></li>
//             </ul>
//           </div>

//           <div className="link-column">
//             <h1>CyberMind Works LLP</h1>
//             <ul>
//               <li><a href="mailto:info@cybermindworks.com"><br />
//                 10/15 K.M Towers - 1st Floor, Chakrapani Road,<br />
//                 Guindy, Chennai, Tamil Nadu, 60004</a></li>
//               <li><a href="tel:+1234567890">ph: +01 75000 53535</a></li>
//               <li><a href='#'>www.cybermindworks.com</a></li>
//               <li><a href="mailto:info@cybermindworks.com">contact@cybermindworks.com</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="copyright">
//         <p>Copyright © 2025, CyberMind Works | All rights reserved.</p>
//       </div>
//     </footer>
//   )
// }

// export default Footer;

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
              {/* <li><Link to="/whyUs">Why Us</Link></li> */}
              <li><Link to="/why-us">Why Us</Link></li>

              <li><Link to="/privacy-terms">Privacy Terms</Link></li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Portfolio</h3>
            <ul>
              <li><Link to="/sales-crm">Sales CRM</Link></li>
              <li><Link to="/marketing-jobverse">Marketing Jobverse</Link></li>
              <li><Link to="/uthsav">Uthsav</Link></li>
              <li><Link to="/learning-platform">Learning Platform</Link></li>
              <li><Link to="/profitabill">Profitabill</Link></li>
              <li><Link to="/baabee-tv">Baabee Tv</Link></li>
              <li><Link to="/inesh">Inesh</Link></li>
              <li><Link to="/political-app">Political App</Link></li>
              <li><Link to="/farmyng">Farmyng Club App</Link></li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Offerings</h3>
            <ul>
              
              <li><Link to="/products/profitabill">Products</Link></li>

              <li><Link to="/services">Services</Link></li>
              <li><Link to="/web">Web App</Link></li>
              {/* <li><Link to="/web">Development</Link></li> */}
              <li><Link to="/mobile">Mobile App</Link></li>
               {/* <li><Link to="/mobile">Development</Link></li> */}
            </ul>
          </div>

          <div className="link-column">
            <h3>Careers</h3>
            <ul>
              <li><Link to="/careers">We are hiring!</Link></li>
            </ul>
          </div>

          <div className="link-column">
            <h1>CyberMind Works LLP</h1>
            <ul>
              <li>
                {/* <a href="mailto:info@cybermindworks.com"> */}
                  <p>10/15 K.M Towers - 1st Floor, Chakrapani Road,<br /> Guindy, Chennai, Tamil Nadu, 60004</p>
                {/* </a> */}
              </li>
              {/* <li><a href="tel:+917500053535">PH: +91 75000 53535</a></li> */}
              <p>PH: +91 75000 53535</p>
              {/* <li><a href="https://www.cybermindworks.com" target="_blank" rel="noopener noreferrer">www.cybermindworks.com</a></li> */}
              <p>www.cybermindworks.com</p>
              <li><a href="mailto:contact@cybermindworks.com">contact@cybermindworks.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2025, CyberMind Works | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
