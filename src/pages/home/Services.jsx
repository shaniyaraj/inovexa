// import React from "react";
// import './Services.css';
// import mobiledev from '../assets/mobiledev.webp';
// import webappdev from '../assets/webappdev.webp';

// const Services = () => {
//   return (
//     <div className="services-container">
//       <div className="services-text">
//         <h2>Services.</h2>
//         <p>
//           We empower startups, SMBs, and enterprises in transforming their
//           concepts into robust, production-ready applications and prototypes
//           across diverse platforms, including web, mobile, and IoT. Our
//           expertise lies in crafting tailored solutions with a focus on
//           innovation and scalability.
//         </p>
//       </div>
//       <div className="services-cards">
//         <div className="service-card">
//           <img src={mobiledev} alt="Mobile App Development" />
//             <h3>Mobile App Development</h3>
//             <p>React Native | Flutter</p>
//         </div>
//         <div className="service-card">
//           <img src={webappdev} alt="Web App Development" />
//             <h3>Website App Development</h3>
//             <p>React | Next JS | Typescript</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import React from "react";
import './Services.css';
import mobiledev from '../../assets/mobiledev.webp';
import webappdev from '../../assets/webappdev.webp';

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Services.</h2>

      <div className="services-overall-content">
        <div className="services-text">
          <p>
            We empower startups, SMBs, and <br />
            enterprises in transforming their <br />
            concepts into robust, production-ready <br />
            applications and prototypes across <br />
            diverse platforms, including web, mobile, <br />
            and IoT. Our expertise lies in crafting <br />
            tailored solutions with a focus on <br />
            innovation and scalability.
          </p>
        </div>
        <div className="services-cards">
          <div className="service-card">
            <img src={mobiledev} alt="Mobile App Development" />
            <h3>Mobile App Development</h3>
            <p>React Native | Flutter</p>
          </div>
          <div className="service-card">
            <img src={webappdev} alt="Web App Development" />
            <h3>Website App Development</h3>
            <p>React | Next JS | Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;