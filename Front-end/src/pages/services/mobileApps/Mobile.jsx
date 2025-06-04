// import React from 'react';
// import './Mobile.css';
// import kotlin from '../../../assets/kotlin.png';
// import android from '../../../assets/androidStudio.png';
// import flutter from '../../../assets/flutter.svg';
// import swift from '../../../assets/swift.svg';
// import reactLogo from '../../../assets/react.svg';
// import pwa from '../../../assets/pwaIcon.png';
// import azure from '../../../assets/azure.png';
// import aws from '../../../assets/aws.png';
// import ban1 from '../../../assets/ban1.png';
// import ban2 from '../../../assets/ban1.png';
// import ban4 from '../../../assets/ban4.png';
// import ban5 from '../../../assets/ban5.png';
// import aatchitamizh from '../../../assets/aatchitamizhlogo.webp';
// import BB from '../../../assets/BBlogo.png';
// import captain from '../../../assets/captainLogo.webp';
// import DMK from '../../../assets/DmkLogo.webp';
// import farmyng from '../../../assets/farmyngclub.png';
// import hyperlaunch from '../../../assets/hyperlaunch.png';
// import inesh from '../../../assets/inesh.webp';
// import ivb from '../../../assets/ivbLogo.jpg';
// import jobzshala from '../../../assets/jobzshala.png';
// import moneyrush from '../../../assets/MoneyRushLogo.webp';
// import ovhqlogo from '../../../assets/ovhqlogo.png';
// import schoolnet from '../../../assets/schoolnetLogo.webp';
// import Farmyng from '../../../assets/farm2.webp';
// import inesh2 from '../../../assets/inesh2.webp';
// import dmkImage from '../../../assets/dmk2.webp';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';

// const MobileAppsPage = () => {
//   const serviceImages = [ban1, ban2, ban4, ban5];

//   const techLogos = [
//     { src: kotlin, alt: 'Kotlin' },
//     { src: android, alt: 'Android Studio' },
//     { src: flutter, alt: 'Flutter' },
//     { src: swift, alt: 'Swift' },
//     { src: reactLogo, alt: 'React' },
//     { src: pwa, alt: 'PWA' },
//     { src: azure, alt: 'Azure' },
//     { src: aws, alt: 'AWS' },
//   ];

//   const brands = [
//     { name: 'aatchitamizh', logo: aatchitamizh },
//     { name: 'BB', logo: BB },
//     { name: 'Captain', logo: captain },
//     { name: 'DMK', logo: DMK },
//     { name: 'Farmyng', logo: farmyng },
//     { name: 'Hyperlaunch', logo: hyperlaunch },
//     { name: 'Inesh', logo: inesh },
//     { name: 'IVB', logo: ivb },
//     { name: 'Jobzshala', logo: jobzshala },
//     { name: 'MoneyRush', logo: moneyrush },
//     { name: 'OVHQLogo', logo: ovhqlogo },
//     { name: 'schoolnet', logo: schoolnet },
//   ];

  



//   return (
//     <div className="mobile-apps-page">
//       {/* Banner Section */}
//       <section className="services-section">
//         <div className="services-content">
//           <h1><span>Services</span> <br />Offered</h1>
//         </div>
//         <div className="services-gallery">
//           {serviceImages.map((img, index) => (
//             <img key={index} src={img} alt={`service-${index + 1}`} className={`service-img img-${index + 1}`} />
//           ))}
//         </div>
//       </section>

//       {/* Overview Section */}
//       <div className="mobile-app-overview">
//         <h1>Mobile Application Development Overview</h1>
//         <p>
//           We keep experimenting with latest technologies and have successfully created mobile applications using Flutter and React native.
//           Most of our web applications are Progressive Web Apps by default. We have developed mobile applications in various sectors including
//           but not limited to ecommerce, portfolio and land management platform.
//         </p>
//         <p>
//           We have developed mobile applications that are capable of handling millions of transactions per week. We partner with early stage startups,
//           SMBs and help them get their product to market faster. Our mobiles apps are multi-lingual, accessible and performant.
//         </p>
//       </div>

//       {/* Brand Carousel */}
//       <div className="brand-carousel-container">
//         <h2 className="brand-carousel-heading">Brands that trust us.</h2>
//         <Swiper
//           spaceBetween={45}
//           slidesPerView={5}
//           loop={true}
//           speed={1000}
//           autoplay={{ delay: 0, disableOnInteraction: false }}
//           modules={[Autoplay]}
//           breakpoints={{
//             320: { slidesPerView: 2 },
//             640: { slidesPerView: 3 },
//             768: { slidesPerView: 4 },
//             1024: { slidesPerView: 6 },
//           }}
//         >
//           {brands.map((brand, index) => (
//             <SwiperSlide key={index}>
//               <div className="brand-slide swiper-wrapper">
//                 <img src={brand.logo} alt={brand.name} className="brand-logo" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Technologies Section */}
//       <div className="technologies-container">
//         <h2 className="tech-title">Technologies we use</h2>
//         <div className="tech-grid">
//           {techLogos.map((logo, index) => (
//             <div key={index} className="tech-icon">
//               <img src={logo.src} alt={logo.alt} />
//             </div>
//           ))}
//         </div>
//       </div>

      
      
//     </div>
 
   
//   );
// };

// export default MobileAppsPage;


import React from 'react';
import './Mobile.css';
import kotlin from '../../../assets/kotlin.png';
import android from '../../../assets/androidStudio.png';
import flutter from '../../../assets/flutter.svg';
import swift from '../../../assets/swift.svg';
import reactLogo from '../../../assets/react.svg';
import pwa from '../../../assets/pwaIcon.png';
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
// import Farmyng from '../../../assets/farm2.webp';
import inesh2 from '../../../assets/inesh2.webp';
import dmkImage from '../../../assets/dmk2.webp';

import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const MobileAppsPage = () => {
  const serviceImages = [ban1, ban2, ban4, ban5];

  const techLogos = [
    { src: kotlin, alt: 'Kotlin' },
    { src: android, alt: 'Android Studio' },
    { src: flutter, alt: 'Flutter' },
    { src: swift, alt: 'Swift' },
    { src: reactLogo, alt: 'React' },
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
    <div className="mobile-apps-page">
      {/* Banner Section */}
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

      {/* Overview Section */}
      <div className="mobile-app-overview">
        <h1>Mobile Application Development Overview</h1>
        <p>
          We keep experimenting with latest technologies and have successfully created mobile applications using Flutter and React native.
          Most of our web applications are Progressive Web Apps by default. We have developed mobile applications in various sectors including
          but not limited to ecommerce, portfolio and land management platform.
        </p>
        <p>
          We have developed mobile applications that are capable of handling millions of transactions per week. We partner with early stage startups,
          SMBs and help them get their product to market faster. Our mobiles apps are multi-lingual, accessible and performant.
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

      {/* Technologies Section */}
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

      {/* Inesh & Sakkarapani Section */}
      
      <div className="portfolio-wrapper">
  <h1 className="portfolio-heading">Projects Completed</h1>

      <div className="portfolio-simple">
        <div className="portfolio-item">
          <img src={inesh2} alt="Inesh" className="portfolio-img" />
          <h2 className="portfolio-title">Inesh</h2>
        </div>
        <div className="portfolio-item">
          <img src={dmkImage} alt="Sakkarapani" className="portfolio-img" />
          <h2 className="portfolio-title">Sakkarapani</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MobileAppsPage;

