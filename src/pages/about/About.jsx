// import React from 'react';
// import './About.css';
// import emp1 from '../../assets/emp1.avif';
// import emp2 from '../../assets/emp2.avif';
// import emp3 from '../../assets/emp3.avif';
// import emp4 from '../../assets/emp4.avif';
// import emp5 from '../../assets/emp5.avif';
// import emp6 from '../../assets/emp6.avif';

// const teamMembers = [
//   { id: 1, img: emp1, name: 'Member 1' },
//   { id: 2, img: emp2 , name: 'Member 2' },
//   { id: 3, img: emp3, name: 'Member 3' },
//   { id: 4, img: emp4, name: 'Member 4' },
//   { id: 5, img: emp5, name: 'Member 5' },
//   { id: 6, img: emp6, name: 'Member 6' },
// ];

// const BlogPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
// const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

  
//   const handleSearchClick = () => {
//     console.log(`Searching for: ${searchTerm}`);
   
//   };

//   return (
//     <div className="blog-container">
    
//       <nav className="navbar">
//         <div className="navbar-left">
         
//           <ul className="nav-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><Link to="/info">Contact</Link></li>
//             <li><a href="/portfolio">Portfolio</a></li>
//             <li><a href="/careers">Careers</a></li>
//             <li className="drop">
//                <a href="/services">Services</a>
//              <span className="drop-icon">▼</span>
//               <ul className="drop-menu">
//             <li><a href="/services/web-apps">Web Apps</a></li>
//             <li><a href="/services/mobile-apps">Mobile Apps</a></li>
//   </ul>
// </li>

//           </ul>
//         </div>
//         <div className="navbar-right">
//           <div className="search-container">
//             <input
//               type="text"
//               placeholder="Search Blog"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="search-input"
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSearchClick();
//                 }
//               }}
//             />
//             <div onClick={handleSearchClick} className="search-button">
//               <Search size={18} />
//             </div>
//           </div>
//         </div>
//       </nav>
      

// const About = () => {
//   return (
//     <section className="about-section">
//       <h1>About</h1>
//       <p>We are a small passionate team</p>

//       <div className="team-grid">
//         {teamMembers.map(member => (
//           <div key={member.id} className="team-card">
//             <img src={member.img} alt={member.name} />
//           </div>
//         ))}
//       </div>
//       <div >
//         <p className='content'>
//             We empower startups, SMBs, and enterprises in transforming their concepts into <br />
//             robust, production-ready applications and prototypes across diverse platforms,<br /> 
//             including web, mobile, and IoT. Our expertise lies in crafting tailored solutions with a <br />
//              focus on innovation and scalability.
//              </p>
        
//               <p>Need help in turning your idea into a successful product? Talk to us. We can help <br />
//                 you build your product quickly and ensure it can scale infinitely.
//             </p>
//             <a href="#" className='link'>Get in touch</a>
//       </div>
//       <footer className='foot'>Copyright © 2025 CyberMind Works. All rights reserved.
// </footer>
//     </section>
    
//   );
// };

// export default About;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';  // Assuming you're using lucide-react for icons
import './About.css';
import emp1 from '../../assets/emp1.avif';
import emp2 from '../../assets/emp2.avif';
import emp3 from '../../assets/emp3.avif';
import emp4 from '../../assets/emp4.avif';
import emp5 from '../../assets/emp5.avif';
import emp6 from '../../assets/emp6.avif';

const teamMembers = [
  { id: 1, img: emp1, name: 'Member 1' },
  { id: 2, img: emp2 , name: 'Member 2' },
  { id: 3, img: emp3, name: 'Member 3' },
  { id: 4, img: emp4, name: 'Member 4' },
  { id: 5, img: emp5, name: 'Member 5' },
  { id: 6, img: emp6, name: 'Member 6' },
];

const About = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="blog-container">
      {/* Navigation Bar */}
      
                

      {/* About Section */}
      <section className="about-section">
        <h1>About</h1>
        <p>We are a small passionate team</p>

        <div className="team-grid">
          {teamMembers.map(member => (
            <div key={member.id} className="team-card">
              <img src={member.img} alt={member.name} />
            </div>
          ))}
        </div>
        <div>
          <p className='content'>
            We empower startups, SMBs, and enterprises in transforming their concepts into <br />
            robust, production-ready applications and prototypes across diverse platforms,<br /> 
            including web, mobile, and IoT. Our expertise lies in crafting tailored solutions with a <br />
            focus on innovation and scalability.
          </p>
          <p>
            Need help in turning your idea into a successful product? Talk to us. We can help <br />
            you build your product quickly and ensure it can scale infinitely.
          </p>
         
        </div>
        
      </section>
    </div>
  );
};

export default About;
