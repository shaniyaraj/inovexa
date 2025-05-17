// import React from 'react';
// import './WhyUs.css';

// const features = [
//   {
//     title: 'Rapid Application Development',
//     description: 'We deliver meaningful products quickly. The solutions we build respond to real-world market demands.',
//   },
//   {
//     title: 'Partnering with the best',
//     description: 'We only use world class products like AWS, Azure and avoid cheap stuff.',
//   },
//   {
//     title: '100% money back guarantee',
//     description: "We won't charge you a penny if you are not satisfied with the output - never happened.",
//   },
//   {
//     title: 'Strictly defined SLAs',
//     description: 'The products that we create follow strict SLAs and has never breached SLA so far.',
//   },
//   {
//     title: 'Latest technologies',
//     description: 'We use latest technologies like Flutter, React, NextJs, Typescript.',
//   },
//   {
//     title: 'Fully Modern UI, UX',
//     description: 'Our design is fully modern and is inline with current trends.',
//   },
// ];

// const WhyUs = () => {
//   return (
//     <div className="whyus-container">
//       <h2 className="whyus-title">Why Us?</h2>
//       <div className="whyus-grid">
//         {features.map((feature, index) => (
//           <div className="whyus-item" key={index}>
//             <span className="check-icon">✔</span>
//             <div>
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyUs;

import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <h2 className="whyus-title">Why Us?</h2>
      <div className="whyus-grid">
        {/* Left Column */}
        <div className="whyus-column">
          <div className="whyus-item">
            <span className="check-icon">✔</span>
            <div>
              <h3>Rapid Application Development</h3>
              <p>We deliver meaningful products quickly. The solutions we
              build respond to real-world market demands.</p>
            </div>
          </div>
          <div className="whyus-item">
            <span className="check-icon">✔</span>
            <div>
              <h3>100% money back guarantee</h3>
              <p>We won't charge you a penny if you are not satisfied with
               the output - never happened.</p>
            </div>
          </div>
          <div className="whyus-item">
            <span className="check-icon">✔</span>
            <div>
              <h3>Latest technologies</h3>
              <p>We use latest technologies like Flutter, React, NextJs,<br />
               Typescript.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="whyus-column">
          <div className="whyus-item">
            <span className="check-icon">✔</span>
            <div>
              <h3>Partnering with the best</h3>
              <p>We only use world class products like AWS, Azure 
              and <br />avoid cheap stuff.</p>
            </div>
          </div>
          <div className="whyus-item">
            <span className="check-icon">✔</span>
            <div>
              <h3>Strictly defined SLAs</h3>
              <p>The products that we create follow strict SLAs and has <br />
               never breached SLA so far.</p>
            </div>
          </div>
          <div className="whyus-item">
            <span className="check-icon">✔</span>
            <div>
              <h3>Fully Modern UI, UX</h3>
              <p>Our design is fully modern and is inline with <br />
              current trends.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

