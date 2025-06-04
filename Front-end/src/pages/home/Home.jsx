import React from 'react'
import HeroSection from './HeroSection'
import WorksSection from './WorksSection'
import BrandCarousel from './BrandCarousel'
import OurWorks from './OurWorks'
import AppscaleRecognition from './AppscaleRecognition'
import WhyUs from './WhyUs'
import Services from './Services'
import IdeaSection from './IdeaSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <WorksSection />
        <BrandCarousel />
        <OurWorks/>
        <AppscaleRecognition />
        <WhyUs/>
        <Services/>
        <IdeaSection/>
    </div>
  )
}

export default Home