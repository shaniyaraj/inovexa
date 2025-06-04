import React from 'react';
import '../mobileApps/Mobile.css';
import './Web.css';
import reactLogo from '../../../assets/react.svg';
import gatsby from '../../../assets/gatsby.png';
import nextjs from '../../../assets/nextjs.png';
import pwa from '../../../assets/pwaIcon.png';
import dotnetcore from '../../../assets/dotnetcore.png';
import postgresql from '../../../assets/postgresql.png';
import azure from '../../../assets/azure.png';
import aws from '../../../assets/aws.png';
import ban1 from '../../../assets/ban1.png';
import ban2 from '../../../assets/ban1.png';
import ban4 from '../../../assets/ban4.png';
import ban5 from '../../../assets/ban5.png';
import aatchitamizh from '../../../assets/aatchitamizhlogo.webp';
import BB from '../../../assets/BBlogo.png';
import captain from '../../../assets/captainLogo.webp';
import DMK from '../../../assets/DmkLogo.webp';
import farmyng from '../../../assets/farmyngclub.png';
import hyperlaunch from '../../../assets/hyperlaunch.png';
import inesh from '../../../assets/inesh.webp';
import ivb from '../../../assets/ivbLogo.jpg';
import jobzshala from '../../../assets/jobzshala.png';
import moneyrush from '../../../assets/MoneyRushLogo.webp';
import ovhqlogo from '../../../assets/ovhqlogo.png';
import schoolnet from '../../../assets/schoolnetLogo.webp';
import marketingJobverseImg from '../../../assets/marketing2.webp';
import usthav from '../../../assets/uthsav.webp';
import sales from '../../../assets/sales1.webp';
import learn from '../../../assets/learn2.webp';
import baabee from '../../../assets/baabee2.webp';
// import dmkImage from '../../assets/dmk2.webp'

import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const WebAppsPage = () => {
  const serviceImages = [ban1, ban2, ban4, ban5];
  const techLogos = [
    // { src: kotlin, alt: 'Kotlin' },
    // { src: android, alt: 'Android Studio' },
    // { src: flutter, alt: 'Flutter' },
    // { src: swift, alt: 'Swift' },
    { src: reactLogo, alt: 'React' },
    {src: gatsby,alt:'Gatsby'},
    {src:nextjs, alt:'Nextjs'},
    {src:dotnetcore,alt:'Dotnetcore'},
    {src:postgresql,alt:'Postgresql'},
    { src: pwa, alt: 'PWA' },
    { src: azure, alt: 'Azure' },
    { src: aws, alt: 'AWS' },
  ];

  const brands = [
    { name: 'aatchitamizh', logo: aatchitamizh },
    { name: 'BB', logo: BB },
    { name: 'Captain', logo: captain },
    { name: 'DMK', logo: DMK },
    { name: 'Farmyng', logo: farmyng },
    { name: 'Hyperlaunch', logo: hyperlaunch },
    { name: 'Inesh', logo: inesh },
    { name: 'IVB', logo: ivb },
    { name: 'Jobzshala', logo: jobzshala },
    { name: 'MoneyRush', logo: moneyrush },
    { name: 'OVHQLogo', logo: ovhqlogo },
    { name: 'schoolnet', logo: schoolnet },
  ];


  return (
    <div>
      {/* Services Section */}
      <section className="services-section">
        <div className="services-content">
          <h1><span>Services</span> <br />Offered</h1>
        </div>
        <div className="services-gallery">
          {serviceImages.map((img, index) => (
            <img key={index} src={img} alt={`service-${index + 1}`} className={`service-img img-${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Overview */}
      <div className="mobile-app-overview">
        <h1>Web Application Development Overview</h1>
        <p>
         We are one of the few companies that develop applications from scratch using the latest cutting edge technologies. As a result our application performs better, scales better.
          We have our own set of libraries that are battle tested - this helps us build applications faster.</p>
        <p>
        We have developed web applications that are capable of handling millions of transactions per week. We partner with early stage startups,
         SMBs and help them get their product to market faster. Our websites have ranked better by Google audits and other performance measuring tools.


        </p>
      </div>

      {/* Brand Carousel */}
      <div className="brand-carousel-container">
        <h2 className="brand-carousel-heading">Brands that trust us.</h2>
        <Swiper
          spaceBetween={45}
          slidesPerView={5}
          loop={true}
          speed={1000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-slide swiper-wrapper">
                <img src={brand.logo} alt={brand.name} className="brand-logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Technologies */}
      <div className="technologies-container">
        <h2 className="tech-title">Technologies we use</h2>
        <div className="tech-grid">
          {techLogos.map((logo, index) => (
            <div key={index} className="tech-icon">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
       <div className="portfolio-wrapper">
  <h1 className="portfolio-heading">Projects Completed</h1>

      <div className="portfolio-simple">
        <div className="portfolio-item">
          <img src={marketingJobverseImg} alt="Inesh" className="portfolio-img" />
          <h2 className="portfolio-title">Marketing Jobverse</h2>
        </div>
        <div className="portfolio-item">
          <img src={usthav} alt="Sakkarapani" className="portfolio-img" />
          <h2 className="portfolio-title">Uthsav</h2>
        </div>
        <div className="portfolio-item">
          <img src={sales} alt="Sakkarapani" className="portfolio-img" />
          <h2 className="portfolio-title">Sales CRM</h2>
        </div>
        <div className="portfolio-item">
          <img src={learn} alt="Sakkarapani" className="portfolio-img" />
          <h2 className="portfolio-title">Learning Platform</h2>
        </div>
        <div className="portfolio-item">
          <img src={baabee} alt="Sakkarapani" className="portfolio-img" />
          <h2 className="portfolio-title">Baabee TV</h2>
        </div>
      </div>
      
    
 
</div>
    </div>
  );
};

export default WebAppsPage;
