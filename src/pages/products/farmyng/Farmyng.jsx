import React from "react";
import banner2 from "../../../assets/banner2.png";
import feeds from "../../../assets/feeds.webp";
import listingPage from "../../../assets/listingPage.webp";
import marketplace from "../../../assets/marketplace.webp";
import agri from "../../../assets/agri.webp";
import "./Farmyng.css"; // Import the CSS file

const Farmyng = () => {
  return (
    <div className="app-container">

      {/* Title & Banner */}
      <h1 className="title">Farmyng Club</h1>
      <div className="phone-wrapper">
        <div className="phone-frame">
          <img
            src={banner2}
            alt="Main screen"
            className="phone-image"
          />
        </div>
      </div>

      {/* Overview Section */}
      <section className="overview-section">
        <h2 className="overview-title">Overview</h2>
        <p className="overview-text">
          Farmyng Club is agri land platform that connects farmers with industries, agents and common people. It's <br />
          the first ever app in India to come up with the concept of contract farming. It's multilingual and aimed at <br />
          attracting farmers all over India. It's currently only available as a mobile app in Android and iOS platforms. <br />
          Future plans include supporting farmers with cutting edge technology like IoT enabled sensors, farming <br />
          equipment, B2B marketplace and more.
        </p>
      </section>

      {/* Localized News Feed Section */}
      <div className="localized-container">
        <div className="phone-container">
          <img src={feeds} alt="Localized Feed" className="img" />
        </div>
        <div className="text-container">
          <h1 className="font-heading">
            <span className="highlight">Localized</span> news feed
          </h1>
          <p className="description">
            Farmyng Club provides a highly personalized (& <br />
            localized) feed for every farmer. This takes into <br />
            account the preferences of the farmer, location,<br />
            language and the crops that they are growing.
          </p>
        </div>
      </div>

      {/* Listing Page Section */}
      <div className="localized-container">
        <div className="text-container">
          <h1 className="font-heading">
            <span className="highlight">Listing Page</span> for all
          </h1>
          <p className="description">
            Every farmer gets a free landing page listing their <br />
            crops, products & services offered. They can share <br />
            this page with others and generate leads for their <br />
            business.
          </p>
        </div>
        <div className="phone">
          <img src={listingPage} alt="Listing Page" className="imag2" />
        </div>
      </div>

      {/* Marketplace Section */}
      <div className="localized-container">
        <div className="phone-container">
          <img src={marketplace} alt="Marketplace" className="img" />
        </div>
        <div className="text-container">
          <h1 className="font-heading">
            <span className="highlight">Marketplace </span>- Products & services
          </h1>
          <p className="description">
            Farmyng Club offers a peer-to-peer marketplace<br />
            where anyone can offer a product or a service.
          </p>
        </div>
      </div>

      {/* Agri Product Section */}
      <div className="localized-container">
        <div className="text-container">
          <h1 className="font-heading">
            <span className="highlight">Agri Product</span>, buy at 0% commission
          </h1>
          <p className="description">
            Users can purchase products and services from other <br />
            members of Farmyng Club with no brokerage fee. All <br />
            leads are passed on to the owner completely free of cost.
          </p>
        </div>
        <div className="phone">
          <img src={agri} alt="Agri Products" className="imag2" />
        </div>
      </div>

      {/* Call To Action */}
      <div className="cta-wrapper">
        <h2 className="cta-title">Want a similar app?</h2>
        <button className="cta-button">Talk to us now!</button>
      </div>
    </div>
  );
};

export default Farmyng;
