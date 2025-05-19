import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './pages/Header';
import Footer from './pages/Footer';

import Home from './pages/home/Home';
import ContactForm from './pages/contact/Contact';
import Careers from './pages/careers/Careers';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Info from './pages/bcontact/Bcontact';

// Services
import Services from './pages/home/Services';

// Products
import Profitabill from './pages/products/profitabill/Profitabill';
import Farmyng from './pages/products/farmyng/Farmyng';
import OurWorks from './pages/home/OurWorks';
import MobileAppsPage from './pages/services/mobileApps/Mobile';
import WebAppsPage from './pages/services/webApps/Web';

function App() {
  return (
    <div className="App">
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
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
