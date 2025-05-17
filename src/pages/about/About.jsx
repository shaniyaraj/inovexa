import React from 'react';
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
  return (
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
      <div >
        <p className='content'>
            We empower startups, SMBs, and enterprises in transforming their concepts into <br />
            robust, production-ready applications and prototypes across diverse platforms,<br /> 
            including web, mobile, and IoT. Our expertise lies in crafting tailored solutions with a <br />
             focus on innovation and scalability.
             </p>
        
              <p>Need help in turning your idea into a successful product? Talk to us. We can help <br />
                you build your product quickly and ensure it can scale infinitely.
            </p>
            <a href="#" className='link'>Get in touch</a>
      </div>
      <footer className='foot'>Copyright © 2025 CyberMind Works. All rights reserved.
</footer>
    </section>
    
  );
};

export default About;
