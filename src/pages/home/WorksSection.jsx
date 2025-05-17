import Enterprise from "../../assets/EnterpriseScale.png"
import realTimeApp from "../../assets/realTimeApp.png"
import interactive from "../../assets/interactive.png"
import dataHeavy from "../../assets/dataHeavy.png"
import blazingFast from '../../assets/blazingFast.png'
import awardWinning from '../../assets/awardWinning.webp'
import { useEffect, useState } from "react"



const projectsData = {
  enterprise: [
    {
      title: '5 Million + leads in CRM',
      description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of dataicon',
      image: Enterprise,
    },
    {
      title: 'Near real-time Lead Prioritization',
      description: 'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
      image: Enterprise,
    },
    {
      title: '360 degree tracking across products',
      description: 'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
      image: Enterprise,
    }
  ],
  learning: [
    {
      title: 'Coding Judge, Audio/Video tests',
      description: 'We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.',
      image: realTimeApp,
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
      title: 'Not just Text',
      description: 'Editor supports MCQs, Coding editor and many such components built according to client’s needs',
      image: interactive,
    },
    {
      title: 'Version control, Auto save and more...',
      description: 'WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.',
      image: interactive,
    },
  ],
  data: [
    {
      title: '100,000,000 + records migrated',
      description: 'Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost',
      image: dataHeavy,
    },
    {
      title: 'Tera bytes of fast data movement ',
      description: 'We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours',
      image: dataHeavy,
    },
  ],
  blazing: [
    {
      title: 'Millions of visits',
      description: 'We have built websites that handle millions of visitors, while still operating at peak performance',
      image: blazingFast,
    },
    {
      title: 'Lightning speed - 90 + score',
      description: "We have bulit websites that have consistency ranked hign in google page audits",
      image: blazingFast,
    },
    {
      title: 'Crazy Optimization',
      description: 'We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack',
      image: blazingFast,
    },
  ],
  award: [
    {
      title: 'Recognized by Google',
      description: 'We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy',
      image: awardWinning,
    },
    {
      title: 'National News coverage',
      description: 'Our association with Google Appscale academy was conveyed in all major new-pappers ',
      image: awardWinning,
    },
    {
      title: 'Loved by Users',
      description: '4 + star rated and downloade by more than 10,000 users in playstore',
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

export default WorksSection;