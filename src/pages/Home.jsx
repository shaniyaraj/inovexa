import { Link } from "lucide-react";
import { Link } from 'react-router-dom';


function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">CyberMind Works</h1>
      </div>

      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>

          <li className="nav-item dropdown">
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              setServicesOpen(!servicesOpen);
            }}>
              Services
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#web-apps">Web Apps</a></li>
                <li><a href="#mobile-apps">Mobile Apps</a></li>
              </ul>
            )}
          </li>


          <li className="nav-item dropdown">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              setProductsOpen(!productsOpen);
            }}>
              Products
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li><a href="#profitabill">Profitabill</a></li>
                <li><a href="#farmyng club">Farmyng Club</a></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><a href="#blog">Blog</a></li>
          <li className="nav-item"><a href="#careers">Careers</a></li>
        </ul>
      </nav>

      <button className="contact-button">Contact Us</button>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get a software for your business that is
          <span className="gradient-text">Fast<br /></span>
          <span className="gradient-text">Reliable <br /></span>
          <span className="gradient-text"> Scalable<br /></span>
          <span className="gradient-text">Secure<br /></span>
        </h1>

        <p className="hero-subtitle">
          We specialize in creating custom software solutions from <br />
          the ground up for startups and mid-sized enterprises.
        </p>

        <div className="trusted-by">
          <p>Trusted by</p>
          <div className="trusted-logo">
            <img src={yCombinator} alt="Y Combinator" />
            <p>founders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React, { useEffect, useState } from 'react';
import './SlideshowIntro.css'; // Add styles below

const slides = [
  {
    image: '/slide1.jpg',
    title: 'Welcome to Our Showcase',
    description: 'We build powerful digital products.',
  },
  {
    image: '/slide2.jpg',
    title: 'Creative & Scalable',
    description: 'Tailored solutions for every stage.',
  },
  {
    image: '/slide3.jpg',
    title: 'Driven by Results',
    description: 'Measurable outcomes for real impact.',
  },
];

const SlideshowIntro = ({ onComplete }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setCurrent(prev => {
        const next = prev + 1;
        if (next >= slides.length) {
          clearInterval(interval);
          setTimeout(() => {
            document.body.style.overflow = 'auto';
            onComplete();
          }, 800);
          return prev;
        }
        return next;
      });
    }, 3000);

    return () => {
      document.body.style.overflow = 'auto';
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="slideshow-intro">
      <div
        className="slideshow-track"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={`Slide ${index}`} className="slide-image" />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export  {SlideshowIntro};
function CardsContainer() {
  const cardsData = [
    {
      title: "Demo Portal",
      images: [demo1, demo2],
      features: ["Realtime Matching", "Calendar sync", "Notifications", "Reports"],
    },
    {
      title: "Freelance platform",
      images: [freelance1, freelance2],
      features: ["Freelance Directory", "Custom Quotation", "Track Progress", "Rating & Reviews"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              features={card.features}
              images={card.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// const ServicesSection = () => {
//   return (
//     <div>
//       <Services />
//     </div>
//   );
// };

function AppscaleRecognition() {
  return (
    <div className="appscale-container">
      <div className="award-card">
        <img src={farmyungAward} alt="Appscale Academy Award" className="award-image" />
      </div>
      <p className="description-text">
        Our project, <span className="highlight">Farmyng Club</span>, has been acknowledged<br />
        by Google's Appscale Academy.
      </p>
    </div>
  );
};


function IdeaSection() {
  return (
    <section className="idea-section">
      <h2 className="idea-title">Have an idea?</h2>
      <p className="idea-description">
        Need help in turning your idea into a successful product? <br />
        Talk to us. We can help you build your product quickly and <br />
        ensure it can scale infinitely.
      </p>
      <Link to="/Contact" className="idea-button">
        Get Free Consulting
      </Link>
    </section>
  );
};



function Footer() {
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
  );
}

export default App;


