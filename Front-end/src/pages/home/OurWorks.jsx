import React from "react";
import "./OurWorks.css";
import main2 from '../../assets/main2.png';
import freelancePlatformImg from '../../assets/freelance2.png';
import reports from '../../assets/reports.png';
import marketingJobverseImg from '../../assets/marketing2.webp';
import usthav from '../../assets/uthsav.webp';
import Farmyng from '../../assets/farm2.webp';
import sales from '../../assets/sales1.webp';
import learn from '../../assets/learn2.webp';
import Profitabill from '../../assets/profitable1.webp';
import baabee from '../../assets/baabee2.webp';
import inesh from '../../assets/inesh2.webp';
import dmkImage from '../../assets/dmk2.webp'


const OurWorks = () => {
  return (
     <div className="portfolio-wrapper">
  <h1 className="portfolio-heading">Our Works</h1>

    <div className="portfolio-container">
    <div className="project">
        <img
          src={main2}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Demo portal</h2>
      </div>

      <div className="project">
        <img
          src={freelancePlatformImg}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Freelance Platform</h2>
      </div>

       <div className="project">
        <img
          src={reports}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Hyperlaunch Platform</h2>
      </div>

       <div className="project">
        <img
          src={marketingJobverseImg}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Marketing Jobverse</h2>
      </div>

      <div className="project">
        <img
          src={usthav}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Uthsav</h2>
      </div>

      <div className="project">
        <img
          src={Farmyng}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Farmyng</h2>
      </div>

      <div className="project">
        <img
          src={sales}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Sales CRM</h2>
      </div>

      <div className="project">
        <img
          src={learn}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Learning Platform</h2>
      </div>


      <div className="project">
        <img
          src={Profitabill}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Profitabill</h2>
      </div>


       <div className="project">
        <img
          src={baabee}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Baabee TV</h2>
      </div>

      <div className="project">
        <img
          src={inesh}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Inesh</h2>
      </div>

      <div className="project">
        <img
          src={dmkImage}
          alt="Profitabill"
          className="project-image"
        />
        <h2 className="project-title">Sakarapani</h2>
      </div>
</div>
    </div>
  );
};

export default OurWorks;
