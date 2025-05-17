// import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import aatchitamizh from '../../assets/aatchitamizhlogo.webp';
import BB from '../../assets/BBlogo.png';
import captain from '../../assets/captainLogo.webp';
import DMK from '../../assets/DmkLogo.webp';
import farmyng from '../../assets/farmyngclub.png';
import hyperlaunch from '../../assets/hyperlaunch.png';
import inesh from '../../assets/inesh.webp';
import ivb from '../../assets/ivbLogo.jpg';
import jobzshala from '../../assets/jobzshala.png';
import moneyrush from '../../assets/MoneyRushLogo.webp';
import ovhqlogo from '../../assets/ovhqlogo.png';
import schoolnet from '../../assets/schoolnetLogo.webp';
import 'swiper/css';
import 'swiper/css/autoplay';

const BrandCarousel = () => {
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
    <div className="brand-carousel-container">
      <h2 className="brand-carousel-heading">Brands that trust us.</h2>
      <Swiper
        spaceBetween={45}
        slidesPerView={5}
        loop={true}
        speed={1000} 
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
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
  );
};

export default BrandCarousel;