import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "../src/App.css"
import useCustomAnalytics from './hooks/useCustomAnalytics';

import Header from './pages/Header';
import Footer from './pages/Footer';

import Home from './pages/home/Home';
import ContactForm from './pages/contact/Contact';
import Careers from './pages/careers/Careers';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';


// Services
import Services from './pages/home/Services';

// Products
import Profitabill from './pages/products/profitabill/Profitabill';
import Farmyng from './pages/products/farmyng/Farmyng';
import OurWorks from './pages/home/OurWorks';
import MobileAppsPage from './pages/services/mobileApps/Mobile';
import WebAppsPage from './pages/services/webApps/Web';

import ThankYou from './pages/Thankyou'; 
import Apply from "./pages/Careerapply";

import PrivacyPolicy from './pages/Privacy';
//ScrollToTop
import ScrollToTop from './ScrollToTop';

import WhyUs from './pages/home/WhyUs';

//others
import Terms from "./pages/Terms";
import Analytics from "./pages/Analytics";



function App() {
  // Use custom analytics instead of Google Analytics
  useCustomAnalytics();
  
  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<OurWorks />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-apps" element={<WebAppsPage />} />
        <Route path="/services/mobile-apps" element={<MobileAppsPage />} />

        {/* Products */}
        <Route path="/products/profitabill" element={<Profitabill />} />
        <Route path="/products/farmyng-club" element={<Farmyng />} />

        {/* Others */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/info" element={<Info />} /> */}
        

        {/* other routes */}
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/apply" element={<Apply />} />

        {/* footer routing */}
        
          <Route path="/mobile" element={<MobileAppsPage />} />
          <Route path="/web" element={<WebAppsPage />} />
          <Route path="/Why-us" element={<WhyUs/>} />
          <Route path="/privacy-terms" element={<PrivacyPolicy/>} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/analytics" element={<Analytics />} />


          <Route path="/" element={<Home />} />

 
      </Routes>

      <Footer />
    </div>
  );
}





// const express = require('express');
// const router = express.Router();
// const Visit = require('../models/VisitModel');

// // Get client IP from request
// const getClientIp = (req) => {
//   return (
//     req.headers['x-forwarded-for']?.split(',').shift() ||
//     req.socket?.remoteAddress
//   );
// };

// // POST /api/visit - Record a visit
// router.post('/', async (req, res) => {
//   const ip = getClientIp(req);

//   try {
//     let visit = await Visit.findOne({ ipAddress: ip });

//     if (visit) {
//       // Existing visitor
//       visit.visitCount += 1;
//       visit.visitHistory.push({ timestamp: new Date() });
//       await visit.save();
//     } else {
//       // New visitor
//       visit = new Visit({
//         ipAddress: ip,
//         visitHistory: [{ timestamp: new Date() }],
//       });
//       await visit.save();
//     }

//     res.status(200).json({ message: 'Visit recorded', visit });
//   } catch (err) {
//     console.error('Error saving visit:', err);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// module.exports = router;
















export default App;












