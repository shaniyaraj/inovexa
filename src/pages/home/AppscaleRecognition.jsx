import React from 'react';
import farmyungAward from '../../assets//farmyngAward.webp';



function AppscaleRecognition() {
  return (
    <div className="appscale-container">
      <div className="award-card">
        <img src={farmyungAward} alt="Appscale Academy Award" className="award-image" />
      </div>
      <p className="description-text">
        Our project, <span className="highlight">Farmyng Club</span>, has been acknowledged<br />
        by Google's Appscale Academy.
      </p>
    </div>
  );
};

export default AppscaleRecognition;


