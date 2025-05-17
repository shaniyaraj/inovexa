
import yCombinator from '../../assets/yCombinator.png';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get a software for your <br /> business that is
          <span className='scrolling-words-wrapper'>
            <span className='scrolling-words gradient-text'>
              <div className='gradient-text'>Fast</div>
              <div className='gradient-text'>Reliable</div>
              <div className='gradient-text'>Scalable</div>
              <div className='gradient-text'>Secure</div>
            </span>
          </span>
        </h1>

        <p className="hero-subtitle">
          We specialize in creating custom software solutions from<br />
          the ground up for startups and mid-sized enterprises.
        </p>

        <div className="trusted-by">
          <p>Trusted by</p>
          <div className="trusted-logo">
            <img src={yCombinator} alt="Y Combinator" />
            <p>founders</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;