import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cmwlogo from '../assets/cmwlogo.svg';

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="header">
          <div className="logo-container">
            {/* <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'inline-block'
              }}
            >
              <img
                src={cmwlogo}
                alt="CyberMind Works Logo"
                style={{ height: '40px', width: 'auto' }}
              />
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
               CyberMind Works
              </h1>
            </Link> */}
          
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={cmwlogo} alt="CyberMind Works Logo" />
              <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>CyberMind Works</h1>
            </Link>
          </div>

      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="about">About</Link></li>
          <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>

          <li className="nav-item dropdown">
            <span onClick={() => setServicesOpen(!servicesOpen)}  style={{ fontWeight: '500',fontSize:'16px', cursor: 'pointer' }}>
              Services
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </span>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/services/web-apps">Web Apps</Link></li>
                <li><Link to="/services/mobile-apps">Mobile Apps</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item dropdown">
            <span onClick={() => setProductsOpen(!productsOpen)}  style={{ fontWeight: '500',fontSize:'16px', cursor: 'pointer' }}>
              Products
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </span>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/products/profitabill">Profitabill</Link></li>
                <li><Link to="/products/farmyng-club">Farmyng Club</Link></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><Link to="/blog">Blog</Link></li>
          <li className="nav-item"><Link to="/careers">Careers</Link></li>
        </ul>
      </nav>

      <Link to="/contact" className="contact-button">Contact Us</Link>
    </header>
  );
}

export default Header;



// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// function Header() {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [productsOpen, setProductsOpen] = useState(false);
//   const location = useLocation();

//   // Don't show header nav on /blog route
//   if (location.pathname.startsWith('/blog')) {
//     return null;
//   }

//   return (
//     <header className="header">
//       <div className="logo-container">
//         <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>
//           <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'boid' }}>
//             CyberMind Works
//           </h1>
//         </Link>
//       </div>

//       <nav className="main-nav">
//         <ul className="nav-list">
//           <li className="nav-item"><Link to ="/about">About</Link></li> 
//           <li className="nav-item"><Link to="/portfolio">Portfolio</Link></li>

//           <li className="nav-item dropdown">
//             <span onClick={() => setServicesOpen(!servicesOpen)} style={{ fontWeight: '500', fontSize: '16px',cursor: 'pointer' }}>
//               Services
//               <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
//                 <path d="M7 10l5 5 5-5H7z" />
//               </svg>
//             </span>
//             {servicesOpen && (
//               <ul className="dropdown-menu">
//                 <li><Link to="/services/web-apps">Web Apps</Link></li>
//                 <li><Link to="/services/mobile-apps">Mobile Apps</Link></li>
//               </ul>
//             )}
//           </li>

//           <li className="nav-item dropdown">
//             <span onClick={() => setProductsOpen(!productsOpen)} style={{ fontWeight: '500',fontSize:'16px', cursor: 'pointer' }}>
//               Products
//               <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
//                 <path d="M7 10l5 5 5-5H7z" />
//               </svg>
//             </span>
//             {productsOpen && (
//               <ul className="dropdown-menu">
//                 <li><Link to="/products/profitabill">Profitabill</Link></li>
//                 <li><Link to="/products/farmyng-club">Farmyng Club</Link></li>
//               </ul>
//             )}
//           </li>

//           <li className="nav-item"><Link to="/blog">Blog</Link></li>
          
//           <li className="nav-item"><Link to="/careers">Careers</Link></li>
//         </ul>

//       </nav>

//       <Link to="/contact" className="contact-button">Contact Us</Link>
//     </header>
//   );
// }

// export default Header;

