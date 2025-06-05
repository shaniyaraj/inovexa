// import React from 'react';
// import './OurWorks.css';

// // Import images
// import main2 from '../../assets/main2.png';
// import freelancePlatformImg from '../../assets/freelance2.png';
// import reports from '../../assets/reports.png';
// import marketingJobverseImg from '../../assets/marketing2.webp';
// import usthav from '../../assets/uthsav.webp';
// import Farmyng from '../../assets/farm2.webp';
// import sales2 from '../../assets/sales2.webp';
// import learn from '../../assets/learn2.webp';
// import Pro from '../../assets/pro.webp';
// import baabee from '../../assets/baabee2.webp';
// import inesh from '../../assets/inesh2.webp';
// import dmkImage from '../../assets/dmk2.webp';

// function OurWorks() {
//   // Portfolio data array
//   const portfolioData = [
//     {
//       id: 1,
//       title: 'Demo Portal',
//       image: main2,
//       features: ['Realtime Matching', 'Calendar sync', 'Notifications', 'Reports'],
//     },
//     {
//       id: 2,
//       title: 'Freelance platform',
//       image: freelancePlatformImg,
//       features: ['Freelance Directory', 'Custom Quotation', 'Track Progress', 'Rating & Reviews'],
//     },
//     {
//       id: 3,
//       title: 'Hyperlaunch Learning platform',
//       image: reports,
//       features: ['LMS', 'Job Search'],
//     },
//     {
//       id: 4,
//       title: 'Marketing Jobverse',
//       image: marketingJobverseImg,
//       features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
//     },
//     {
//       id: 5,
//       title: 'Uthsav',
//       image: usthav,
//       features: ['LMS', 'Job Search'],
//     },
//     {
//       id: 6,
//       title: 'Farmyng',
//       image: Farmyng,
//       features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
//     },
//     {
//       id: 7,
//       title: 'Sales CRM',
//       image: sales2,
//       features: ['LMS', 'Job Search'],
//     },
//     {
//       id: 8,
//       title: 'Learning Platform',
//       image: learn,
//       features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
//     },
//     {
//       id: 9,
//       title: 'Profitabill',
//       image: Pro,
//       features: ['LMS', 'Job Search'],
//     },
//     {
//       id: 10,
//       title: 'BabeeTv',
//       image: baabee,
//       features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
//     },
//     {
//       id: 11,
//       title: 'inesh',
//       image: inesh,
//       features: ['LMS', 'Job Search'],
//     },
//     {
//       id: 12,
//       title: 'Sakkarapani',
//       image: dmkImage,
//       features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
//     },
//   ];

//   return (
//     <div className="portfolio-container">
//       <h1 className="portfolio-title">Our Works</h1>

//       <div className="portfolio-grid">
//         {portfolioData.map((project) => (
//           <div key={project.id} className="portfolio-card">
//             <div className="image-container">
//               <img src={project.image} alt={`${project.title} Screenshot`} />
//             </div>
//             <h2 className="card-title">{project.title}</h2>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OurWorks;


import React from 'react';
import './OurWorks.css';

// Import images
import main2 from '../../assets/main2.png';
import freelancePlatformImg from '../../assets/freelance2.png';
import reports from '../../assets/reports.png';
import marketingJobverseImg from '../../assets/marketing2.webp';
import usthav from '../../assets/uthsav.webp';
import Farmyng from '../../assets/farm2.webp';
import sales from '../../assets/sales1.webp';
import learn from '../../assets/learn2.webp';
import Profitabill from '../../assets/profitable1.webp';
import baabee from '../../assets/baabee2.webp';
import inesh from '../../assets/inesh2.webp';
import dmkImage from '../../assets/dmk2.webp';

function OurWorks() {
  // Portfolio data array
  const portfolioData = [
    {
      id: 1,
      title: 'Demo Portal',
      image: main2,
      features: ['Realtime Matching', 'Calendar sync', 'Notifications', 'Reports'],
    },
    {
      id: 2,
      title: 'Freelance platform',
      image: freelancePlatformImg,
      features: ['Freelance Directory', 'Custom Quotation', 'Track Progress', 'Rating & Reviews'],
    },
    {
      id: 3,
      title: 'Hyperlaunch Learning platform',
      image: reports,
      features: ['LMS', 'Job Search'],
    },
    {
      id: 4,
      title: 'Marketing Jobverse',
      image: marketingJobverseImg,
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 5,
      title: 'Uthsav',
      image: usthav,
      features: ['LMS', 'Job Search'],
    },
    {
      id: 6,
      title: 'Farmyng',
      image: Farmyng,
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 7,
      title: 'Sales CRM',
      image: sales,
      features: ['LMS', 'Job Search'],
    },
    {
      id: 8,
      title: 'Learning Platform',
      image: learn,
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 9,
      title: 'Profitabill',
      image: Profitabill,
      features: ['LMS', 'Job Search'],
    },
    {
      id: 10,
      title: 'BabeeTv',
      image: baabee,
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
    {
      id: 11,
      title: 'inesh',
      image: inesh,
      features: ['LMS', 'Job Search'],
    },
    {
      id: 12,
      title: 'Sakkarapani',
      image: dmkImage,
      features: ['Subscription', 'Freelance Directory', 'Job Search', 'JobAlerts'],
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Our Works</h1>

      <div className="portfolio-grid">
        {portfolioData.map((project) => (
          <div key={project.id} className="portfolio-item">
            <div className="image-container">
              <img src={project.image} alt={`${project.title} Screenshot`} />
            </div>
            <h2 className="item-title">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurWorks;