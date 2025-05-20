// import React, { useState } from 'react';
// import { Search } from 'lucide-react';
// import awsz from '../../assets/awsz.avif';
// import awstrust from '../../assets/awstrust.avif';
// import kuber from '../../assets/kuber.avif';
// import gemini from '../../assets/gemini.avif';
// import typeer from '../../assets/typeer.avif';
// import unity from '../../assets/unity.avif';
// import startup from '../../assets/startup.avif';
// import search from '../../assets/search.avif';
// import optimize from '../../assets/optimize.avif';
// import coffe from '../../assets/coffe.avif';
// import boost from '../../assets/boost.avif';
// import mastering from '../../assets/mastering.avif';
// import phoneimg from '../../assets/phoneimg.avif';
// import Printer from '../../assets/printer.avif';

// import './Blog.css';
// import { Link } from 'react-router-dom';


// const BlogPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
  
//   // Sample blog posts data
//   const [blogPosts, setBlogPosts] = useState([
//     {
//       id: 1,
//       title: "Fixed: Amazon S3 403 Access Denied",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: awsz ,
//       tags: ["AWS", "S3", "Troubleshooting"]
//     },
//     {
//        id: 2,
//       title: "Fixed: \"Connection refused\" or \"Connection timed out\" while connecting to EC2 Instance",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: awsz,
//       tags: ["AWS", "EC2", "Troubleshooting"]
//     },
//     {
//       id: 3,
//       title: "2025 Fixed: \"Write Not Enabled\" Error in AWS Trusted Advisor for S3 Bucket Access Logs",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: awstrust,
//       tags: ["AWS", "Trusted Advisor", "S3"]
//     },
//     {
//       id: 4,
//       title: "2025 Fixed: GKE Pod Randomly Restarts Without Error",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: kuber,
//       tags: ["Kubernetes", "GKE", "Troubleshooting"]
//     },
//      {
//       id: 5,
//       title: "Fixed: Gemini Pro cURL Query Error: \"Please use a valid role: user, model.\"",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: gemini,
//       tags: ["Gemini", "API", "Troubleshooting"]
//     },
//     {
//       id: 6,
//       title: "[2025 Updated] Fixed: TypeError: Class extends value undefined is not a function or null",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: typeer,
//       tags: ["JavaScript", "TypeScript", "Debugging"]
//     },
//     {
//       id: 7,
//       title: "How We Integrated Multiple Unity Games into a Mobile App and Launched a Skill-Based Real Money Gaming App",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: unity,
//       tags: ["Unity", "Mobile Development", "Case Study"]
//     },
//      {
//       id: 8,
//       title: "How to find a tech partner for your startup in Chennai",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: startup,
//       tags: ["Startup", "Partnership", "Chennai"]
//     },
//     {
//       id: 9,
//       title: "Why We Switched from Typesense to Postgres Full-Text Search",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: search,
//       tags: ["Database", "Search", "PostgreSQL"]
//     },
//     {
//       id: 10,
//       title: "How We Optimized Our AWS Infrastructure to Reduce Monthly Costs by 45%",
//       author: "Dhanushkkar",
//       date: "March 16, 2025",
//       image: optimize,
//       tags: ["AWS", "Cost Optimization", "Cloud"]
//     },
//     {
//       id: 11,
//       title: "Managin Recurring Events in Node.js with rule",
//       author: "Boopesh Mahendran",
//       date: "December 27, 2024",
//       image: coffe,
//       tags: ["AWS", "Cost Optimization", "Cloud"]
//     },
//     {
//       id: 12,
//       title: "Boost Your Content Delivery With AWS CloudFront",
//       author: "Boopesh Mahendran",
//       date: "December 27, 2024",
//       image:  boost,
//       tags: ["AWS", "Cost Optimization", "Cloud"]
//     },
//     {
//       id: 13,
//       title: "How to Develop a Dating App Like Tinder Or Bumble",
//       author: "jeysurya",
//       date: "December 27, 2023",
//       image: phoneimg,
//       tags: ["AWS", "Cost Optimization", "Cloud"]
//     },
//      {
//       id: 14,
//       title: "Line Endings in Code:,Commom Problems and How to  Fix Them ",
//       author: "jeysurya",
//       date: "December 27, 2023",
//       image: Printer,
//       tags: ["AWS", "Cost Optimization", "Cloud"]
//     },
//     {
//       id: 15,
//       title: "Mastering Drag-and-Drop:A Comprehensive Guide",
//       author: "jeysurya",
//       date: "December 27, 2023",
//       image: mastering,
//       tags: ["AWS", "Cost Optimization", "Cloud"]
//     },
//   ]);

//   // Filter blog posts based on search term
//   const filteredBlogPosts = blogPosts.filter(post => 
//     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     post.author.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Handle search button click
//   const handleSearchClick = () => {
//     console.log(`Searching for: ${searchTerm}`);
//     // You could add additional search functionality here
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

     
//       <header className="blog-header">
//         <h1>Our Blog</h1>
//       </header>

      
//       <div className="blog-posts">
//         {filteredBlogPosts.length > 0 ? (
//           filteredBlogPosts.map(post => (
//             <a href={post.url} key={post.id} className="blog-card-link">
//               <div className="blog-card">
//                 <div className="blog-card-image" >
//                   <img src={post.image} alt={post.title} />
//                 </div>
//                 <div className="blog-card-content">
//                   <h2 className="blog-card-title">{post.title}</h2>
//                   <div className="blog-card-meta">
//                     <div className="author-icon"></div>
//                     <span className="author-name">{post.author}</span>
//                     <span className="dot">•</span>
//                     <span className="post-date">{post.date}</span>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           ))
//         ) : (
//           <div className="no-results">
//             <p>No blog posts found matching your search.</p>
//           </div>
//         )}
//       </div>
//     </div>
//    );
//  };

//  export default BlogPage;

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import awsz from '../../assets/awsz.avif';
import awstrust from '../../assets/awstrust.avif';
import kuber from '../../assets/kuber.avif';
import gemini from '../../assets/gemini.avif';
import typeer from '../../assets/typeer.avif';
import unity from '../../assets/unity.avif';
import startup from '../../assets/startup.avif';
import search from '../../assets/search.avif';
import optimize from '../../assets/optimize.avif';
import coffe from '../../assets/coffe.avif';
import boost from '../../assets/boost.avif';
import mastering from '../../assets/mastering.avif';
import phoneimg from '../../assets/phoneimg.avif';
import Printer from '../../assets/printer.avif';

import './Blog.css';


const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blog posts data
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Fixed: Amazon S3 403 Access Denied",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awsz,
      tags: ["AWS", "S3", "Troubleshooting"]
    },
    {
      id: 2,
      title: "Fixed: \"Connection refused\" or \"Connection timed out\" while connecting to EC2 Instance",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awsz,
      tags: ["AWS", "EC2", "Troubleshooting"]
    },
    {
      id: 3,
      title: "2025 Fixed: \"Write Not Enabled\" Error in AWS Trusted Advisor for S3 Bucket Access Logs",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: awstrust,
      tags: ["AWS", "Trusted Advisor", "S3"]
    },
    {
      id: 4,
      title: "2025 Fixed: GKE Pod Randomly Restarts Without Error",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: kuber,
      tags: ["Kubernetes", "GKE", "Troubleshooting"]
    },
    {
      id: 5,
      title: "Fixed: Gemini Pro cURL Query Error: \"Please use a valid role: user, model.\"",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: gemini,
      tags: ["Gemini", "API", "Troubleshooting"]
    },
    {
      id: 6,
      title: "[2025 Updated] Fixed: TypeError: Class extends value undefined is not a function or null",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: typeer,
      tags: ["JavaScript", "TypeScript", "Debugging"]
    },
    {
      id: 7,
      title: "How We Integrated Multiple Unity Games into a Mobile App and Launched a Skill-Based Real Money Gaming App",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: unity,
      tags: ["Unity", "Mobile Development", "Case Study"]
    },
    {
      id: 8,
      title: "How to find a tech partner for your startup in Chennai",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: startup,
      tags: ["Startup", "Partnership", "Chennai"]
    },
    {
      id: 9,
      title: "Why We Switched from Typesense to Postgres Full-Text Search",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: search,
      tags: ["Database", "Search", "PostgreSQL"]
    },
    {
      id: 10,
      title: "How We Optimized Our AWS Infrastructure to Reduce Monthly Costs by 45%",
      author: "Dhanushkkar",
      date: "March 16, 2025",
      image: optimize,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      id: 11,
      title: "Managin Recurring Events in Node.js with rule",
      author: "Boopesh Mahendran",
      date: "December 27, 2024",
      image: coffe,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      id: 12,
      title: "Boost Your Content Delivery With AWS CloudFront",
      author: "Boopesh Mahendran",
      date: "December 27, 2024",
      image: boost,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      id: 13,
      title: "How to Develop a Dating App Like Tinder Or Bumble",
      author: "jeysurya",
      date: "December 27, 2023",
      image: phoneimg,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      id: 14,
      title: "Line Endings in Code:,Commom Problems and How to  Fix Them ",
      author: "jeysurya",
      date: "December 27, 2023",
      image: Printer,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
    {
      id: 15,
      title: "Mastering Drag-and-Drop:A Comprehensive Guide",
      author: "jeysurya",
      date: "December 27, 2023",
      image: mastering,
      tags: ["AWS", "Cost Optimization", "Cloud"]
    },
  ]);

  // Filter blog posts based on search term
  const filteredBlogPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle search button click
  const handleSearchClick = () => {
    console.log(`Searching for: ${searchTerm}`);
    // You could add additional search functionality here
  };

  return (
    <div className="blog-container">
      {/* Navigation Bar */}
     

      {/* Blog Header */}
      <header className="blog-header">
        <h1>Our Blog</h1>
      </header>

      {/* Blog Posts */}
      <div className="blog-posts">
        {filteredBlogPosts.length > 0 ? (
          filteredBlogPosts.map(post => (
            <a href={post.url} key={post.id} className="blog-card-link">
              <div className="blog-card">
                <div className="blog-card-image" >
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <div className="blog-card-meta">
                    <div className="author-icon"></div>
                    <span className="author-name">{post.author}</span>
                    <span className="dot">•</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="no-results">
            <p>No blog posts found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;