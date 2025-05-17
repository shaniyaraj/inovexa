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
const projectsData = {
  enterprise: [
      {
        title: '5 Million + leads in CRM',
        description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of dataicon',
        image: Enterprise,
      },
      {
        title:'Near real-time Lead Prioritization',
        description:'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
         image: Enterprise,
    },
    {
        title:'360 degree tracking across products',
        description:'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
         image: Enterprise,
    }
    ],
    learning: [
      {
        title: 'Coding Judge, Audio/Video tests',
        description:'We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.',
        image: realTimeApp ,
      },
      {
        title: 'Student skill profilling',
        description: 'Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.',
        image: realTimeApp,
      },
      {
        title: 'AI integrated- GPT 3.5',
        description: 'Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.',
        image: realTimeApp,
      },
    ],
    interactive: [
      {
        title: 'Realtime multi user collaborative editor',
        description: 'Google docs like interactivity and notion like interface built into one.',
       image: interactive,
      //  isSpecialLayout: true,
      },
      {
        title:'Not just Text',
        description:'Editor supports MCQs, Coding editor and many such components built according to client’s needs',
        image:interactive,
      },
      {
        title:'Version control, Auto save and more...',
        description:'WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.',
        image:interactive,
      },
    ],
    data: [
      {
        title: '100,000,000 + records migrated',
        description:'Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost',
       image: dataHeavy,
      },
      {
        title: 'Tera bytes of fast data movement ',
        description:'We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours',
        image: dataHeavy,
      },
],
    blazing: [
      {
        title: 'Millions of visits',
        description:'We have built websites that handle millions of visitors, while still operating at peak performance',
        image: blazingFast,
    },
    {
        title:'Lightning speed - 90 + score',
        description:"We have bulit websites that have consistency ranked hign in google page audits",
        image: blazingFast,
    },
    {
        title:'Crazy Optimization',
        description:'We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack',
        image:blazingFast,
    },
    ],
    award: [
      {
        title: 'Recognized by Google',
        description:'We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy',
        image: awardWinning,
      },
      {
        title:'National News coverage',
        description:'Our association with Google Appscale academy was conveyed in all major new-pappers ',
        image: awardWinning,
      },
      {
        title:'Loved by Users',
        description:'4 + star rated and downloade by more than 10,000 users in playstore',
        image: awardWinning,
      },
    ],
  };

function WorksSection() {
  const [activeCategory, setActiveCategory] = useState('learning');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'enterprise', name: 'Enterprise scale', tags: ['#SaaS', '#CRM'] },
    { id: 'learning', name: 'Learning platform', tags: ['#LMS'] },
    { id: 'interactive', name: 'Interactive', tags: ['#LMS'] },
    { id: 'data', name: 'Data heavy', tags: ['#ETL'] },
    { id: 'blazing', name: 'Blazing fast', tags: ['#JAMStack'] },
    { id: 'award', name: 'Award winning app', tags: ['#Flutter'] },
  ];

 
  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSlide(0); // Reset to first slide when changing categories
  };

  const renderProjects = () => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) {
      return <div className="no-projects">No projects to display for this category.</div>;
    }

    return (
      <div className="projects-showcase">
        <div className="showcase-container">
          {/* Left Column - Project Features */}
          <div className="project-features">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`project-feature ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" className="lightning-icon">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column - Image Showcase */}
          <div className="image-showcase">
            {projects[activeSlide]?.isSpecialLayout ? (
              <div className="hackathon-display">
                <div className="hackathon-main">
                  <img src="C:\cybermind\assets\EnterpriseScale.png" alt="24 Hour Programming Hackathon" />
                </div>
                <div className="hackathon-details">
                  <img src="/hackathon-card.png" alt="Hackathon Details" />
                  <img src="/hackathon-schedule.png" alt="Hackathon Schedule" />
                </div>
              </div>
            ) : (
              <div className="image-container">
                <img 
                  src={projects[activeSlide]?.image} 
                  alt={projects[activeSlide]?.title}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="works-section">
      <h2 className="section-title">Some of our works</h2>
      
      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <h3>{category.name}</h3>
            <div className="tags">
              {category.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Active Indicator */}
      <div className="active-indicator">
        <div 
          className="indicator-line" 
          style={{ 
            left: `${categories.findIndex(cat => cat.id === activeCategory) * (100 / categories.length)}%`,
            width: `${100 / categories.length}%`
          }}
        ></div>
      </div>
      
      {/* Projects Display */}
      {renderProjects()}
      
      {/* Slide Indicators */}
      <div className="slide-indicators">
        {(projectsData[activeCategory] || []).map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
 
// function BrandCarousel() {
//   // Array of brand data with logos and names
  //  const brands = [
  //   { name: "Acework Engineers", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=Acework" },
  //   { name: "Sarkar IAS Academy", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=Sarkar" },
  //    { name: "Inesh", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=Inesh" },
  //    { name: "Captain Fresh", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=Captain+Fresh" },
  //    { name: "DMK", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=DMK" },
  //    { name: "IAS Study Circle", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=IAS" },
  //   { name: "EVB", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=EVB" },
  //   { name: "MoneyRush", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=MoneyRush" },
  //   { name: "Overqualified Housewives", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=Overqualified" },
  //    { name: "JobzShala", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=JobzShala" },
  //   { name: "TechFlow", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=TechFlow" },
  //  { name: "GreenLeaf", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=GreenLeaf" },
  //   { name: "BlueOcean", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=BlueOcean" },
  //   { name: "RedPeak", logo: "https://via.placeholder.com/150x60/f8f9fa/212529?text=RedPeak" },
  //  ];

  // const [position, setPosition] = useState(0);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((prevPosition) => {
  //       if (prevPosition <= -100) {
  //         return 0;
  //       }
  //       return prevPosition - 0.5;
  //     });
  //   }, 50);
    
//     return () => clearInterval(interval);
//   }, []);
  
//   const displayBrands = [...brands, ...brands];
  
//   return (
//     <div className="flex flex-col items-center w-full bg-gray-50 py-12 overflow-hidden">
//       <h1 className="text-4xl font-bold text-gray-800 mb-12">Brands that trust us.</h1>
      
//       <div className="relative w-full overflow-hidden">
//         <div 
//           className="flex items-center" 
//           style={{ 
//             transform: `translateX(${position}%)`,
//             transition: position === 0 ? 'none' : 'transform 0.5s linear',
//             width: '200%' // Make the container twice as wide for seamless looping
//           }}
//         >
//           {displayBrands.map((brand, index) => (
//             <div 
//               key={index} 
//               className="flex-none px-6 flex items-center justify-center"
//               style={{ width: '7.14%' }} // 100% / 14 brands = ~7.14% per brand
//             >
//               <img 
//                 src={brand.logo} 
//                 alt= {`${brand.name} logo`}
//                 className="max-h-16 max-w-full object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
//           <path 
//             fill="#FFFFFF" 
//             fillOpacity="1" 
//             d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
//           ></path>
//         </svg>
//       </div>
//     </div>
//   );
// }

const Card = ({ title, images, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <div 
          className="transition-transform duration-1000 ease-in-out"
          style={{ 
            transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
            height: '200%'
          }}
        >
          {/* First image */}
          <div className="h-64 w-full">
            <img 
              src="/api/placeholder/400/320" 
              alt={`${title} preview 1`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Second image (revealed on hover) */}
          <div className="h-64 w-full">
            <img 
              src="/api/placeholder/400/320" 
              alt={`${title} preview 2`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {features.map((feature, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

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


function IdeaSection () {
  return (
    <section className="idea-section">
      <h2 className="idea-title">Have an idea?</h2>
      <p className="idea-description">
        Need help in turning your idea into a successful product? <br />
        Talk to us. We can help you build your product quickly and <br />
        ensure it can scale infinitely.
      </p>
      <button className="idea-button">Get Free Consulting</button>
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