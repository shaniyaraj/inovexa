
// import Enterprise from "../../assets/EnterpriseScale.png"
// import realTimeApp from "../../assets/realTimeApp.png"
// import interactive from "../../assets/interactive.png"
// import dataHeavy from "../../assets/dataHeavy.png"
// import blazingFast from '../../assets/blazingFast.png'
// import awardWinning from '../../assets/awardWinning.webp'
// import { useEffect, useState, useRef } from "react"

// const projectsData = {
//   enterprise: [
//     {
//       title: '5 Million + leads in CRM',
//       description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of data',
//       image: Enterprise,
//     },
//     {
//       title: 'Near real-time Lead Prioritization',
//       description: 'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
//       image: Enterprise,
//     },
//     {
//       title: '360 degree tracking across products',
//       description: 'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
//       image: Enterprise,
//     }
//   ],
//   learning: [
//     {
//       title: 'Coding Judge, Audio/Video tests',
//       description: 'We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.',
//       image: realTimeApp,
//     },
//     {
//       title: 'Student skill profilling',
//       description: 'Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.',
//       image: realTimeApp,
//     },
//     {
//       title: 'AI integrated- GPT 3.5',
//       description: 'Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.',
//       image: realTimeApp,
//     },
//   ],
//   interactive: [
//     {
//       title: 'Realtime multi user collaborative editor',
//       description: 'Google docs like interactivity and notion like interface built into one.',
//       image: interactive,
//     },
//     {
//       title: 'Not just Text',
//       description: "Editor supports MCQs, Coding editor and many such components built according to client's needs",
//       image: interactive,
//     },
//     {
//       title: 'Version control, Auto save and more...',
//       description: 'WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.',
//       image: interactive,
//     },
//   ],
//   data: [
//     {
//       title: '100,000,000 + records migrated',
//       description: 'Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost',
//       image: dataHeavy,
//     },
//     {
//       title: 'Tera bytes of fast data movement ',
//       description: 'We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours',
//       image: dataHeavy,
//     },
//   ],
//   blazing: [
//     {
//       title: 'Millions of visits',
//       description: 'We have built websites that handle millions of visitors, while still operating at peak performance',
//       image: blazingFast,
//     },
//     {
//       title: 'Lightning speed - 90 + score',
//       description: "We have built websites that have consistently ranked high in google page audits",
//       image: blazingFast,
//     },
//     {
//       title: 'Crazy Optimization',
//       description: 'We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack',
//       image: blazingFast,
//     },
//   ],
//   award: [
//     {
//       title: 'Recognized by Google',
//       description: 'We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy',
//       image: awardWinning,
//     },
//     {
//       title: 'National News coverage',
//       description: 'Our association with Google Appscale academy was conveyed in all major new-pappers ',
//       image: awardWinning,
//     },
//     {
//       title: 'Loved by Users',
//       description: '4 + star rated and downloade by more than 10,000 users in playstore',
//       image: awardWinning,
//     },
//   ],
// };

// function WorksSection() {
//   const categories = [
//     { id: 'enterprise', name: 'Enterprise scale', tags: ['#SaaS', '#CRM'] },
//     { id: 'learning', name: 'Learning platform', tags: ['#LMS'] },
//     { id: 'interactive', name: 'Interactive', tags: ['#LMS'] },
//     { id: 'data', name: 'Data heavy', tags: ['#ETL'] },
//     { id: 'blazing', name: 'Blazing fast', tags: ['#JAMStack'] },
//     { id: 'award', name: 'Award winning app', tags: ['#Flutter'] },
//   ];

//   const [activeCategory, setActiveCategory] = useState('enterprise');
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
//   const [presentationComplete, setPresentationComplete] = useState(false);  // === added ===
  
//   const sectionRef = useRef(null);
//   const intervalRef = useRef(null);
//   const categoryIntervalRef = useRef(null);
//   const currentCategoryIndexRef = useRef(0);

//   // === added ===
//   const disableScroll = () => {
//     document.body.style.overflow = 'hidden';
//   };

//   const enableScroll = () => {
//     document.body.style.overflow = '';
//   };

//   useEffect(() => {
//     currentCategoryIndexRef.current = categories.findIndex(cat => cat.id === activeCategory);
    
//     const rotateCategories = () => {
//       currentCategoryIndexRef.current = (currentCategoryIndexRef.current + 1) % categories.length;
//       setActiveCategory(categories[currentCategoryIndexRef.current].id);
//       setActiveSlide(0);

//       // === added === check if we’ve looped back to start
//       if (currentCategoryIndexRef.current === 0) {
//         setPresentationComplete(true);
//       }
//     };

//     if (autoRotateEnabled && !presentationComplete) {
//       categoryIntervalRef.current = setInterval(rotateCategories, 3000);
//     }

//     return () => {
//       if (categoryIntervalRef.current) {
//         clearInterval(categoryIntervalRef.current);
//       }
//     };
//   }, [autoRotateEnabled, presentationComplete]);  // === updated ===

//   useEffect(() => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//     }

//     const projects = projectsData[activeCategory] || [];
//     if (projects.length <= 1 || !autoRotateEnabled) return;

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [activeCategory, autoRotateEnabled]);

//   useEffect(() => {
//     const headerHeight = 80; // adjust to your fixed header height

//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();

//       if (rect.top <= headerHeight) {
//         disableScroll();
//         setAutoRotateEnabled(true);
//       } else {
//         enableScroll();
//         setAutoRotateEnabled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       enableScroll();
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           disableScroll();           // === added === lock scroll when section appears
//           setAutoRotateEnabled(true);
//         } else {
//           enableScroll();            // === added === unlock scroll if section out of view
//           setAutoRotateEnabled(false);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//       enableScroll();                // === added === ensure scroll is restored on cleanup
//     };
//   }, []);

//   // === added === unlock scroll when presentation completes
//   useEffect(() => {
//     if (presentationComplete) {
//       enableScroll();
//       setAutoRotateEnabled(false);
//     }
//   }, [presentationComplete]);

//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId);
//     setActiveSlide(0);

//     currentCategoryIndexRef.current = categories.findIndex(cat => cat.id === categoryId);
//     setAutoRotateEnabled(false);

//     if (categoryIntervalRef.current) {
//       clearInterval(categoryIntervalRef.current);
//     }

//     setTimeout(() => {
//       setAutoRotateEnabled(true);
//     }, 3000);
//   };

//   const renderProjects = () => {
//     const projects = projectsData[activeCategory] || [];
//     if (projects.length === 0) {
//       return <div className="no-projects">No projects to display for this category.</div>;
//     }

//     return (
//       <div className="projects-showcase">
//         <div className="showcase-container">
//           <div className="project-features">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className={`project-feature ${index === activeSlide ? 'active' : ''}`}
//                 onClick={() => setActiveSlide(index)}
//               >
//                 <div className="feature-icon">
//                   <svg viewBox="0 0 24 24" className="lightning-icon">
//                     <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
//                   </svg>
//                 </div>
//                 <div className="feature-content">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="image-showcase" style={{ transition: 'opacity 0.5s ease-in-out' }}>
//             <div className="image-container">
//               <img
//                 src={projects[activeSlide]?.image}
//                 alt={projects[activeSlide]?.title}
//                 style={{ opacity: 1, transition: 'opacity 0.5s ease-in-out' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="works-section" ref={sectionRef}>
//       <h2 className="section-title">Some of our works</h2>

//       <div className="category-tabs">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             <h3>{category.name}</h3>
//             <div className="tags">
//               {category.tags.map((tag) => (
//                 <span key={tag} className="tag">{tag}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="active-indicator">
//         <div
//           className="indicator-line"
//           style={{
//             left: `${categories.findIndex(cat => cat.id === activeCategory) * (100 / categories.length)}%`,
//             width: `${100 / categories.length}%`,
//             transition: 'left 0.3s ease-in-out'
//           }}
//         ></div>
//       </div>

//       {renderProjects()}

//       <div className="slide-indicators">
//         {(projectsData[activeCategory] || []).map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === activeSlide ? 'active' : ''}`}
//             onClick={() => {
//               setActiveSlide(index);
//               setAutoRotateEnabled(false);
//               setTimeout(() => setAutoRotateEnabled(true), 10000);
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default WorksSection;




// import Enterprise from "../../assets/EnterpriseScale.png";
// import realTimeApp from "../../assets/realTimeApp.png";
// import interactive from "../../assets/interactive.png";
// import dataHeavy from "../../assets/dataHeavy.png";
// import blazingFast from "../../assets/blazingFast.png";
// import awardWinning from "../../assets/awardWinning.webp";
// import { useEffect, useState, useRef } from "react";

// const projectsData = {
//   enterprise: [
//     {
//       title: "5 Million + leads in CRM",
//       description:
//         "Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of data",
//       image: Enterprise,
//     },
//     {
//       title: "Near real-time Lead Prioritization",
//       description:
//         "Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms",
//       image: Enterprise,
//     },
//     {
//       title: "360 degree tracking across products",
//       description:
//         "Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..",
//       image: Enterprise,
//     },
//   ],
//   learning: [
//     {
//       title: "Coding Judge, Audio/Video tests",
//       description:
//         "We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.",
//       image: realTimeApp,
//     },
//     {
//       title: "Student skill profilling",
//       description:
//         "Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.",
//       image: realTimeApp,
//     },
//     {
//       title: "AI integrated- GPT 3.5",
//       description:
//         "Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.",
//       image: realTimeApp,
//     },
//   ],
//   interactive: [
//     {
//       title: "Realtime multi user collaborative editor",
//       description:
//         "Google docs like interactivity and notion like interface built into one.",
//       image: interactive,
//     },
//     {
//       title: "Not just Text",
//       description:
//         "Editor supports MCQs, Coding editor and many such components built according to client's needs",
//       image: interactive,
//     },
//     {
//       title: "Version control, Auto save and more...",
//       description:
//         "WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.",
//       image: interactive,
//     },
//   ],
//   data: [
//     {
//       title: "100,000,000 + records migrated",
//       description:
//         "Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost",
//       image: dataHeavy,
//     },
//     {
//       title: "Tera bytes of fast data movement ",
//       description:
//         "We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours",
//       image: dataHeavy,
//     },
//   ],
//   blazing: [
//     {
//       title: "Millions of visits",
//       description:
//         "We have built websites that handle millions of visitors, while still operating at peak performance",
//       image: blazingFast,
//     },
//     {
//       title: "Lightning speed - 90 + score",
//       description:
//         "We have built websites that have consistently ranked high in google page audits",
//       image: blazingFast,
//     },
//     {
//       title: "Crazy Optimization",
//       description:
//         "We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack",
//       image: blazingFast,
//     },
//   ],
//   award: [
//     {
//       title: "Recognized by Google",
//       description:
//         "We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy",
//       image: awardWinning,
//     },
//     {
//       title: "National News coverage",
//       description:
//         "Our association with Google Appscale academy was conveyed in all major new-pappers ",
//       image: awardWinning,
//     },
//     {
//       title: "Loved by Users",
//       description:
//         "4 + star rated and downloade by more than 10,000 users in playstore",
//       image: awardWinning,
//     },
//   ],
// };

// function WorksSection() {
//   const categories = [
//     { id: "enterprise", name: "Enterprise scale", tags: ["#SaaS", "#CRM"] },
//     { id: "learning", name: "Learning platform", tags: ["#LMS"] },
//     { id: "interactive", name: "Interactive", tags: ["#LMS"] },
//     { id: "data", name: "Data heavy", tags: ["#ETL"] },
//     { id: "blazing", name: "Blazing fast", tags: ["#JAMStack"] },
//     { id: "award", name: "Award winning app", tags: ["#Flutter"] },
//   ];

//   const [activeCategory, setActiveCategory] = useState("enterprise");
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
//   const [presentationComplete, setPresentationComplete] = useState(false);

//   const sectionRef = useRef(null);
//   const categoryIntervalRef = useRef(null);
//   const currentCategoryIndexRef = useRef(0);

//   const disableScroll = () => {
//     document.body.style.overflow = "hidden";
//   };

//   const enableScroll = () => {
//     document.body.style.overflow = "";
//   };

//   useEffect(() => {
//     // Disable scroll immediately on mount
//     disableScroll();

//     currentCategoryIndexRef.current = categories.findIndex(
//       (cat) => cat.id === activeCategory
//     );

//     const rotateCategories = () => {
//       currentCategoryIndexRef.current =
//         (currentCategoryIndexRef.current + 1) % categories.length;
//       setActiveCategory(categories[currentCategoryIndexRef.current].id);
//       setActiveSlide(0);

//       // If we have looped back to the first category, mark as complete
//       if (currentCategoryIndexRef.current === 0) {
//         setPresentationComplete(true);
//       }
//     };

//     if (autoRotateEnabled && !presentationComplete) {
//       categoryIntervalRef.current = setInterval(rotateCategories, 3000);
//     }

//     return () => {
//       if (categoryIntervalRef.current) {
//         clearInterval(categoryIntervalRef.current);
//       }
//       enableScroll(); // Ensure scroll is re-enabled on unmount
//     };
//   }, [autoRotateEnabled, presentationComplete]);

//   useEffect(() => {
//     if (presentationComplete) {
//       enableScroll();
//       setAutoRotateEnabled(false);
//     }
//   }, [presentationComplete]);

//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId);
//     setActiveSlide(0);

//     currentCategoryIndexRef.current = categories.findIndex(
//       (cat) => cat.id === categoryId
//     );
//     setAutoRotateEnabled(false);

//     if (categoryIntervalRef.current) {
//       clearInterval(categoryIntervalRef.current);
//     }

//     setTimeout(() => {
//       setAutoRotateEnabled(true);
//     }, 3000);
//   };

//   const renderProjects = () => {
//     const projects = projectsData[activeCategory] || [];
//     if (projects.length === 0) {
//       return (
//         <div className="no-projects">
//           No projects to display for this category.
//         </div>
//       );
//     }

//     return (
//       <div className="projects-showcase">
//         <div className="showcase-container">
//           <div className="project-features">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className={`project-feature ${
//                   index === activeSlide ? "active" : ""
//                 }`}
//                 onClick={() => setActiveSlide(index)}
//               >
//                 <div className="feature-icon">
//                   <svg viewBox="0 0 24 24" className="lightning-icon">
//                     <path
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//                 <div className="feature-content">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="image-showcase"
//             style={{ transition: "opacity 0.5s ease-in-out" }}
//           >
//             <div className="image-container">
//               <img
//                 src={projects[activeSlide]?.image}
//                 alt={projects[activeSlide]?.title}
//                 style={{
//                   opacity: 1,
//                   transition: "opacity 0.5s ease-in-out",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="works-section" ref={sectionRef}>
//       <h2 className="section-title">Some of our works</h2>

//       <div className="category-tabs">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className={`category-tab ${
//               activeCategory === category.id ? "active" : ""
//             }`}
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             <h3>{category.name}</h3>
//             <div className="tags">
//               {category.tags.map((tag) => (
//                 <span key={tag} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="active-indicator">
//         <div
//           className="indicator-line"
//           style={{
//             left: `${
//               categories.findIndex((cat) => cat.id === activeCategory) *
//               (100 / categories.length)
//             }%`,
//             width: `${100 / categories.length}%`,
//             transition: "left 0.3s ease-in-out",
//           }}
//         ></div>
//       </div>

//       {renderProjects()}

//       <div className="slide-indicators">
//         {(projectsData[activeCategory] || []).map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === activeSlide ? "active" : ""}`}
//             onClick={() => {
//               setActiveSlide(index);
//               setAutoRotateEnabled(false);
//               setTimeout(() => setAutoRotateEnabled(true), 10000);
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default WorksSection;









// import Enterprise from "../../assets/EnterpriseScale.png";
// import realTimeApp from "../../assets/realTimeApp.png";
// import interactive from "../../assets/interactive.png";
// import dataHeavy from "../../assets/dataHeavy.png";
// import blazingFast from "../../assets/blazingFast.png";
// import awardWinning from "../../assets/awardWinning.webp";
// import { useEffect, useState, useRef } from "react";

// const projectsData = {
//   enterprise: [
//     {
//       title: "5 Million + leads in CRM",
//       description:
//         "Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of data",
//       image: Enterprise,
//     },
//     {
//       title: "Near real-time Lead Prioritization",
//       description:
//         "Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms",
//       image: Enterprise,
//     },
//     {
//       title: "360 degree tracking across products",
//       description:
//         "Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..",
//       image: Enterprise,
//     },
//   ],
//   learning: [
//     {
//       title: "Coding Judge, Audio/Video tests",
//       description:
//         "We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.",
//       image: realTimeApp,
//     },
//     {
//       title: "Student skill profilling",
//       description:
//         "Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.",
//       image: realTimeApp,
//     },
//     {
//       title: "AI integrated- GPT 3.5",
//       description:
//         "Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.",
//       image: realTimeApp,
//     },
//   ],
//   interactive: [
//     {
//       title: "Realtime multi user collaborative editor",
//       description:
//         "Google docs like interactivity and notion like interface built into one.",
//       image: interactive,
//     },
//     {
//       title: "Not just Text",
//       description:
//         "Editor supports MCQs, Coding editor and many such components built according to client's needs",
//       image: interactive,
//     },
//     {
//       title: "Version control, Auto save and more...",
//       description:
//         "WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.",
//       image: interactive,
//     },
//   ],
//   data: [
//     {
//       title: "100,000,000 + records migrated",
//       description:
//         "Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost",
//       image: dataHeavy,
//     },
//     {
//       title: "Tera bytes of fast data movement ",
//       description:
//         "We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours",
//       image: dataHeavy,
//     },
//   ],
//   blazing: [
//     {
//       title: "Millions of visits",
//       description:
//         "We have built websites that handle millions of visitors, while still operating at peak performance",
//       image: blazingFast,
//     },
//     {
//       title: "Lightning speed - 90 + score",
//       description:
//         "We have built websites that have consistently ranked high in google page audits",
//       image: blazingFast,
//     },
//     {
//       title: "Crazy Optimization",
//       description:
//         "We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack",
//       image: blazingFast,
//     },
//   ],
//   award: [
//     {
//       title: "Recognized by Google",
//       description:
//         "We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy",
//       image: awardWinning,
//     },
//     {
//       title: "National News coverage",
//       description:
//         "Our association with Google Appscale academy was conveyed in all major new-pappers ",
//       image: awardWinning,
//     },
//     {
//       title: "Loved by Users",
//       description:
//         "4 + star rated and downloade by more than 10,000 users in playstore",
//       image: awardWinning,
//     },
//   ],
// };

// function WorksSection() {
//   const categories = [
//     { id: "enterprise", name: "Enterprise scale", tags: ["#SaaS", "#CRM"] },
//     { id: "learning", name: "Learning platform", tags: ["#LMS"] },
//     { id: "interactive", name: "Interactive", tags: ["#LMS"] },
//     { id: "data", name: "Data heavy", tags: ["#ETL"] },
//     { id: "blazing", name: "Blazing fast", tags: ["#JAMStack"] },
//     { id: "award", name: "Award winning app", tags: ["#Flutter"] },
//   ];

//   const [activeCategory, setActiveCategory] = useState("enterprise");
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
//   const [presentationComplete, setPresentationComplete] = useState(false);
//   const [scrollDisabled, setScrollDisabled] = useState(false);
//   const [viewedCategories, setViewedCategories] = useState(new Set(["enterprise"]));

//   const sectionRef = useRef(null);
//   const categoryIntervalRef = useRef(null);
//   const currentCategoryIndexRef = useRef(0);
//   const scrollPositionRef = useRef(0);

//   const disableScroll = () => {
//     // Store current scroll position
//     scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    
//     // Prevent scrolling while keeping scrollbar visible
//     document.body.style.position = "fixed";
//     document.body.style.top = `-${scrollPositionRef.current}px`;
//     document.body.style.left = "0";
//     document.body.style.right = "0";
//     document.body.style.overflowY = "scroll"; // Keep scrollbar visible
    
//     setScrollDisabled(true);
//   };

//   const enableScroll = () => {
//     // Remove fixed positioning
//     document.body.style.position = "";
//     document.body.style.top = "";
//     document.body.style.left = "";
//     document.body.style.right = "";
//     document.body.style.overflowY = "";
    
//     // Restore scroll position without jumping
//     window.scrollTo(0, scrollPositionRef.current);
    
//     setScrollDisabled(false);
//   };

//   // Handle scroll detection to disable scroll when section hits header
//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current && !scrollDisabled && !presentationComplete) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const headerHeight = 80; // Adjust this based on your header height
        
//         // When the section title reaches the header area
//         if (rect.top <= headerHeight) {
//           disableScroll();
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollDisabled, presentationComplete]);

//   // Auto-rotate through categories
//   useEffect(() => {
//     currentCategoryIndexRef.current = categories.findIndex(
//       (cat) => cat.id === activeCategory
//     );

//     const rotateCategories = () => {
//       currentCategoryIndexRef.current =
//         (currentCategoryIndexRef.current + 1) % categories.length;

//       const nextCategoryId = categories[currentCategoryIndexRef.current].id;
//       setActiveCategory(nextCategoryId);
//       setActiveSlide(0);

//       setViewedCategories((prev) => {
//         const updated = new Set(prev);
//         updated.add(nextCategoryId);
//         if (updated.size === categories.length) {
//           setPresentationComplete(true);
//         }
//         return updated;
//       });
//     };

//     if (autoRotateEnabled && !presentationComplete && scrollDisabled) {
//       categoryIntervalRef.current = setInterval(rotateCategories, 3000);
//     }

//     return () => {
//       if (categoryIntervalRef.current) {
//         clearInterval(categoryIntervalRef.current);
//       }
//     };
//   }, [autoRotateEnabled, presentationComplete, scrollDisabled, activeCategory]);

//   // Re-enable scroll when presentation is complete
//   useEffect(() => {
//     if (presentationComplete && scrollDisabled) {
//       // Small delay to ensure smooth transition
//       setTimeout(() => {
//         enableScroll();
//         setAutoRotateEnabled(false);
        
//         // Clear any remaining intervals
//         if (categoryIntervalRef.current) {
//           clearInterval(categoryIntervalRef.current);
//         }
//       }, 500); // Half second delay for smooth transition
//     }
//   }, [presentationComplete, scrollDisabled]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       enableScroll();
//       if (categoryIntervalRef.current) {
//         clearInterval(categoryIntervalRef.current);
//       }
//     };
//   }, []);

//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId);
//     setActiveSlide(0);

//     currentCategoryIndexRef.current = categories.findIndex(
//       (cat) => cat.id === categoryId
//     );
//     setAutoRotateEnabled(false);

//     setViewedCategories((prev) => {
//       const updated = new Set(prev);
//       updated.add(categoryId);
//       if (updated.size === categories.length) {
//         setPresentationComplete(true);
//       }
//       return updated;
//     });

//     if (categoryIntervalRef.current) {
//       clearInterval(categoryIntervalRef.current);
//     }

//     // Resume auto-rotation after user interaction
//     setTimeout(() => {
//       if (!presentationComplete) {
//         setAutoRotateEnabled(true);
//       }
//     }, 3000);
//   };

//   const renderProjects = () => {
//     const projects = projectsData[activeCategory] || [];
//     if (projects.length === 0) {
//       return (
//         <div className="no-projects">
//           No projects to display for this category.
//         </div>
//       );
//     }

//     return (
//       <div className="projects-showcase">
//         <div className="showcase-container">
//           <div className="project-features">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className={`project-feature ${
//                   index === activeSlide ? "active" : ""
//                 }`}
//                 onClick={() => setActiveSlide(index)}
//               >
//                 <div className="feature-icon">
//                   <svg viewBox="0 0 24 24" className="lightning-icon">
//                     <path
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//                 <div className="feature-content">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="image-showcase"
//             style={{ transition: "opacity 0.5s ease-in-out" }}
//           >
//             <div className="image-container">
//               <img
//                 src={projects[activeSlide]?.image}
//                 alt={projects[activeSlide]?.title}
//                 style={{
//                   opacity: 1,
//                   transition: "opacity 0.5s ease-in-out",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="works-section" ref={sectionRef}>
//       <h2 className="section-title">Some of our works</h2>

//       <div className="category-tabs">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className={`category-tab ${
//               activeCategory === category.id ? "active" : ""
//             }`}
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             <h3>{category.name}</h3>
//             <div className="tags">
//               {category.tags.map((tag) => (
//                 <span key={tag} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="active-indicator">
//         <div
//           className="indicator-line"
//           style={{
//             left: `${
//               categories.findIndex((cat) => cat.id === activeCategory) *
//               (100 / categories.length)
//             }%`,
//             width: `${100 / categories.length}%`,
//             transition: "left 0.3s ease-in-out",
//           }}
//         ></div>
//       </div>

//       {renderProjects()}

//       <div className="slide-indicators">
//         {(projectsData[activeCategory] || []).map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === activeSlide ? "active" : ""}`}
//             onClick={() => {
//               setActiveSlide(index);
//               setAutoRotateEnabled(false);
//               setTimeout(() => {
//                 if (!presentationComplete) {
//                   setAutoRotateEnabled(true);
//                 }
//               }, 10000);
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

     
  
//     </section>
//   );
// }

// export default WorksSection;







// import Enterprise from "../../assets/EnterpriseScale.png";
// import realTimeApp from "../../assets/realTimeApp.png";
// import interactive from "../../assets/interactive.png";
// import dataHeavy from "../../assets/dataHeavy.png";
// import blazingFast from "../../assets/blazingFast.png";
// import awardWinning from "../../assets/awardWinning.webp";
// import { useEffect, useState, useRef } from "react";

// const projectsData = {
//   enterprise: [
//     {
//       title: "5 Million + leads in CRM",
//       description:
//         "Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of data",
//       image: Enterprise,
//     },
//     {
//       title: "Near real-time Lead Prioritization",
//       description:
//         "Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms",
//       image: Enterprise,
//     },
//     {
//       title: "360 degree tracking across products",
//       description:
//         "Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..",
//       image: Enterprise,
//     },
//   ],
//   learning: [
//     {
//       title: "Coding Judge, Audio/Video tests",
//       description:
//         "We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.",
//       image: realTimeApp,
//     },
//     {
//       title: "Student skill profilling",
//       description:
//         "Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.",
//       image: realTimeApp,
//     },
//     {
//       title: "AI integrated- GPT 3.5",
//       description:
//         "Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.",
//       image: realTimeApp,
//     },
//   ],
//   interactive: [
//     {
//       title: "Realtime multi user collaborative editor",
//       description:
//         "Google docs like interactivity and notion like interface built into one.",
//       image: interactive,
//     },
//     {
//       title: "Not just Text",
//       description:
//         "Editor supports MCQs, Coding editor and many such components built according to client's needs",
//       image: interactive,
//     },
//     {
//       title: "Version control, Auto save and more...",
//       description:
//         "WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.",
//       image: interactive,
//     },
//   ],
//   data: [
//     {
//       title: "100,000,000 + records migrated",
//       description:
//         "Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost",
//       image: dataHeavy,
//     },
//     {
//       title: "Tera bytes of fast data movement ",
//       description:
//         "We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours",
//       image: dataHeavy,
//     },
//   ],
//   blazing: [
//     {
//       title: "Millions of visits",
//       description:
//         "We have built websites that handle millions of visitors, while still operating at peak performance",
//       image: blazingFast,
//     },
//     {
//       title: "Lightning speed - 90 + score",
//       description:
//         "We have built websites that have consistently ranked high in google page audits",
//       image: blazingFast,
//     },
//     {
//       title: "Crazy Optimization",
//       description:
//         "We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack",
//       image: blazingFast,
//     },
//   ],
//   award: [
//     {
//       title: "Recognized by Google",
//       description:
//         "We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy",
//       image: awardWinning,
//     },
//     {
//       title: "National News coverage",
//       description:
//         "Our association with Google Appscale academy was conveyed in all major new-pappers ",
//       image: awardWinning,
//     },
//     {
//       title: "Loved by Users",
//       description:
//         "4 + star rated and downloade by more than 10,000 users in playstore",
//       image: awardWinning,
//     },
//   ],
// };

// function WorksSection() {
//   const categories = [
//     { id: "enterprise", name: "Enterprise scale", tags: ["#SaaS", "#CRM"] },
//     { id: "learning", name: "Learning platform", tags: ["#LMS"] },
//     { id: "interactive", name: "Interactive", tags: ["#LMS"] },
//     { id: "data", name: "Data heavy", tags: ["#ETL"] },
//     { id: "blazing", name: "Blazing fast", tags: ["#JAMStack"] },
//     { id: "award", name: "Award winning app", tags: ["#Flutter"] },
//   ];

//   const [activeCategory, setActiveCategory] = useState("enterprise");
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
//   const [presentationComplete, setPresentationComplete] = useState(false);
//   const [scrollDisabled, setScrollDisabled] = useState(false);
//   const [viewedCategories, setViewedCategories] = useState(new Set(["enterprise"]));
//   const [allowContinuousLoop, setAllowContinuousLoop] = useState(false);

//   const sectionRef = useRef(null);
//   const categoryIntervalRef = useRef(null);
//   const currentCategoryIndexRef = useRef(0);
//   const scrollPositionRef = useRef(0);

//   const disableScroll = () => {
//     // Store current scroll position
//     scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
    
//     // Prevent scrolling while keeping scrollbar visible
//     document.body.style.position = "fixed";
//     document.body.style.top = `-${scrollPositionRef.current}px`;
//     document.body.style.left = "0";
//     document.body.style.right = "0";
//     document.body.style.overflowY = "scroll"; // Keep scrollbar visible
    
//     setScrollDisabled(true);
//   };

//   const enableScroll = () => {
//     // Remove fixed positioning
//     document.body.style.position = "";
//     document.body.style.top = "";
//     document.body.style.left = "";
//     document.body.style.right = "";
//     document.body.style.overflowY = "";
    
//     // Restore scroll position without jumping
//     window.scrollTo(0, scrollPositionRef.current);
    
//     setScrollDisabled(false);
//   };

//   // Handle scroll detection to disable scroll when section hits header
//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current && !scrollDisabled && !presentationComplete) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const headerHeight = 80; // Adjust this based on your header height
        
//         // When the section title reaches the header area
//         if (rect.top <= headerHeight) {
//           disableScroll();
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollDisabled, presentationComplete]);

//   // Auto-rotate through categories
//   useEffect(() => {
//     currentCategoryIndexRef.current = categories.findIndex(
//       (cat) => cat.id === activeCategory
//     );

//     const rotateCategories = () => {
//       currentCategoryIndexRef.current =
//         (currentCategoryIndexRef.current + 1) % categories.length;

//       const nextCategoryId = categories[currentCategoryIndexRef.current].id;
//       setActiveCategory(nextCategoryId);
//       setActiveSlide(0);

//       // Only track viewed categories during the initial presentation
//       if (!allowContinuousLoop) {
//         setViewedCategories((prev) => {
//           const updated = new Set(prev);
//           updated.add(nextCategoryId);
//           if (updated.size === categories.length) {
//             setPresentationComplete(true);
//             setAllowContinuousLoop(true);
//           }
//           return updated;
//         });
//       }
//     };

//     // Auto-rotate when:
//     // 1. During initial presentation (scroll disabled)
//     // 2. After scroll is re-enabled (continuous loop)
//     if (autoRotateEnabled && (scrollDisabled || allowContinuousLoop)) {
//       categoryIntervalRef.current = setInterval(rotateCategories, 3000);
//     }

//     return () => {
//       if (categoryIntervalRef.current) {
//         clearInterval(categoryIntervalRef.current);
//       }
//     };
//   }, [autoRotateEnabled, scrollDisabled, allowContinuousLoop, activeCategory]);

//   // Re-enable scroll when presentation is complete
//   useEffect(() => {
//     if (presentationComplete && scrollDisabled) {
//       // Small delay to ensure smooth transition
//       setTimeout(() => {
//         enableScroll();
//         // Don't disable auto-rotation - let it continue looping
//         setAutoRotateEnabled(true);
        
//       }, 500); // Half second delay for smooth transition
//     }
//   }, [presentationComplete, scrollDisabled]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       enableScroll();
//       if (categoryIntervalRef.current) {
//         clearInterval(categoryIntervalRef.current);
//       }
//     };
//   }, []);

//   const handleCategoryClick = (categoryId) => {
//     setActiveCategory(categoryId);
//     setActiveSlide(0);

//     currentCategoryIndexRef.current = categories.findIndex(
//       (cat) => cat.id === categoryId
//     );
//     setAutoRotateEnabled(false);

//     // Only track viewed categories during initial presentation
//     if (!allowContinuousLoop) {
//       setViewedCategories((prev) => {
//         const updated = new Set(prev);
//         updated.add(categoryId);
//         if (updated.size === categories.length) {
//           setPresentationComplete(true);
//           setAllowContinuousLoop(true);
//         }
//         return updated;
//       });
//     }

//     if (categoryIntervalRef.current) {
//       clearInterval(categoryIntervalRef.current);
//     }

//     // Resume auto-rotation after user interaction
//     setTimeout(() => {
//       setAutoRotateEnabled(true);
//     }, 3000);
//   };

//   const renderProjects = () => {
//     const projects = projectsData[activeCategory] || [];
//     if (projects.length === 0) {
//       return (
//         <div className="no-projects">
//           No projects to display for this category.
//         </div>
//       );
//     }

//     return (
//       <div className="projects-showcase">
//         <div className="showcase-container">
//           <div className="project-features">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className={`project-feature ${
//                   index === activeSlide ? "active" : ""
//                 }`}
//                 onClick={() => setActiveSlide(index)}
//               >
//                 <div className="feature-icon">
//                   <svg viewBox="0 0 24 24" className="lightning-icon">
//                     <path
//                       d="M13 10V3L4 14h7v7l9-11h-7z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </div>
//                 <div className="feature-content">
//                   <h3>{project.title}</h3>
//                   <p>{project.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div
//             className="image-showcase"
//             style={{ transition: "opacity 0.5s ease-in-out" }}
//           >
//             <div className="image-container">
//               <img
//                 src={projects[activeSlide]?.image}
//                 alt={projects[activeSlide]?.title}
//                 style={{
//                   opacity: 1,
//                   transition: "opacity 0.5s ease-in-out",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="works-section" ref={sectionRef}>
//       <h2 className="section-title">Some of our works</h2>

//       <div className="category-tabs">
//         {categories.map((category) => (
//           <div
//             key={category.id}
//             className={`category-tab ${
//               activeCategory === category.id ? "active" : ""
//             }`}
//             onClick={() => handleCategoryClick(category.id)}
//           >
//             <h3>{category.name}</h3>
//             <div className="tags">
//               {category.tags.map((tag) => (
//                 <span key={tag} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="active-indicator">
//         <div
//           className="indicator-line"
//           style={{
//             left: `${
//               categories.findIndex((cat) => cat.id === activeCategory) *
//               (100 / categories.length)
//             }%`,
//             width: `${100 / categories.length}%`,
//             transition: "left 0.3s ease-in-out",
//           }}
//         ></div>
//       </div>

//       {renderProjects()}

//       <div className="slide-indicators">
//         {(projectsData[activeCategory] || []).map((_, index) => (
//           <button
//             key={index}
//             className={`indicator ${index === activeSlide ? "active" : ""}`}
//             onClick={() => {
//               setActiveSlide(index);
//               setAutoRotateEnabled(false);
//               setTimeout(() => {
//                 setAutoRotateEnabled(true);
//               }, 10000);
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

      
//     </section>
//   );
// }

// export default WorksSection;

import Enterprise from "../../assets/EnterpriseScale.png"
import realTimeApp from "../../assets/realTimeApp.png"
import interactive from "../../assets/interactive.png"
import dataHeavy from "../../assets/dataHeavy.png"
import blazingFast from '../../assets/blazingFast.png'
import awardWinning from '../../assets/awardWinning.webp'
import { useEffect, useState, useRef } from "react"

const projectsData = {
  enterprise: [
    {
      title: '5 Million + leads in CRM',
      description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of data',
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
    },
    {
      title: 'Not just Text',
      description: "Editor supports MCQs, Coding editor and many such components built according to client's needs",
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
      description: "We have built websites that have consistently ranked high in google page audits",
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
  const categories = [
    { id: 'enterprise', name: 'Enterprise scale', tags: ['#SaaS', '#CRM'] },
    { id: 'learning', name: 'Learning platform', tags: ['#LMS'] },
    { id: 'interactive', name: 'Interactive', tags: ['#LMS'] },
    { id: 'data', name: 'Data heavy', tags: ['#ETL'] },
    { id: 'blazing', name: 'Blazing fast', tags: ['#JAMStack'] },
    { id: 'award', name: 'Award winning app', tags: ['#Flutter'] },
  ];

  // Start with the "Enterprise scale" category as default
  const [activeCategory, setActiveCategory] = useState('enterprise');
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true);
  // const [presentationComplete, setPresentationComplete] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const categoryIntervalRef = useRef(null);
  const currentCategoryIndexRef = useRef(0); // Keep track of category index
  // const completedCategoriesRef = useRef(new Set());

  // //function to disable scroll
  // const disableScroll =() => {
  //   const scrollTop = window.pageYOffset|| document.documentElement.scrollTop;
  //   const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  // }

  // Setup tab rotation
  useEffect(() => {
    // Get the starting index of 'enterprise'
    currentCategoryIndexRef.current = categories.findIndex(cat => cat.id === activeCategory);
    
    const rotateCategories = () => {
      currentCategoryIndexRef.current = (currentCategoryIndexRef.current + 1) % categories.length;
      setActiveCategory(categories[currentCategoryIndexRef.current].id);
      setActiveSlide(0); // Reset to first slide when changing categories
    };

    // Start rotating categories every 15 seconds
    if (autoRotateEnabled) {
      categoryIntervalRef.current = setInterval(rotateCategories, 3000);
    }

    return () => {
      if (categoryIntervalRef.current) {
        clearInterval(categoryIntervalRef.current);
      }
    };
}, [autoRotateEnabled]);

  // Setup slide rotation within active category
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const projects = projectsData[activeCategory] || [];
    if (projects.length <= 1 || !autoRotateEnabled) return;

    // Create new interval for current category
    // intervalRef.current = setInterval(() => {
    //   setActiveSlide(prevSlide => (prevSlide + 1) % projects.length);
    // }, 0000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeCategory, autoRotateEnabled]);

  // Intersection Observer to start animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAutoRotateEnabled(true);
        } else {
          setAutoRotateEnabled(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSlide(0); // Reset to first slide when changing categories
    
    // Update the current category index reference
    currentCategoryIndexRef.current = categories.findIndex(cat => cat.id === categoryId);
    
    // Temporarily pause auto-rotation when user clicks
    setAutoRotateEnabled(false);
    
    // Clear any existing category rotation interval
    if (categoryIntervalRef.current) {
      clearInterval(categoryIntervalRef.current);
    }
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setAutoRotateEnabled(true);
    }, 3000);
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
          <div className="image-showcase" style={{ transition: 'opacity 0.5s ease-in-out' }}>
            <div className="image-container">
              <img
                src={projects[activeSlide]?.image}
                alt={projects[activeSlide]?.title}
                style={{ opacity: 1, transition: 'opacity 0.5s ease-in-out' }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="works-section" ref={sectionRef}>
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
            width: `${100 / categories.length}%`,
            transition: 'left 0.3s ease-in-out'
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
            onClick={() => {
              setActiveSlide(index);
              // Pause auto-rotation temporarily when manually navigating
              setAutoRotateEnabled(false);
              setTimeout(() => setAutoRotateEnabled(true), 10000);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default WorksSection;