import React from 'react';
import './About.css';
import aboutTeamImg from '../assets/about/about_teampic.webp';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero bg-surface text-on-background">
        <div className="content-container">
          <div className="about-hero-brand animate-slide-up">
            <h1 className="display-xl">
              <span className="logo-bold">TED</span>
              <span className="text-primary logo-bold">x</span>
              <span className="logo-light">CUSAT</span>
            </h1>
          </div>
          <p className="headline-lg animate-slide-up" style={{ animationDelay: '0.2s', maxWidth: '900px', margin: '2rem auto', textAlign: 'center' }}>
            TEDxCUSAT is a dynamic platform where the brightest minds of Cochin University of Science And Technology come together to share ideas that have the power to inspire meaningful change.
          </p>
        </div>
      </section>

      <section className="what-is-section bg-surface-container-low">
        <div className="content-container asymmetric-layout">
          <div className="image-col animate-slide-up">
            <div className="about-image-frame">
              <img src={aboutTeamImg} alt="TEDx Stage" className="about-featured-img" />
            </div>
          </div>
          <div className="content-col animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="headline-lg text-primary">What is TEDx?</h2>
            <p className="body-lg">
              In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection.
            </p>
            <p className="body-md mt-1" style={{ opacity: 0.8 }}>
              These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section bg-surface">
        <div className="content-container">
          <h2 className="display-lg text-center section-title">Our Vision</h2>
          <div className="mission-grid">
            <div className="mission-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="material-icons text-primary mission-icon">psychology</span>
              <h3 className="headline-sm">Genesis</h3>
              <p className="body-md">From raw concepts to global impact, we nurture the roots of innovation within our academic community.</p>
            </div>
            <div className="mission-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="material-icons text-primary mission-icon">hub</span>
              <h3 className="headline-sm">Resonance</h3>
              <p className="body-md">Creating a ripple effect that transcends disciplinary boundaries and sparks regional transformations.</p>
            </div>
            <div className="mission-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <span className="material-icons text-primary mission-icon">public</span>
              <h3 className="headline-sm">Impact</h3>
              <p className="body-md">Connecting local intelligence with global discourse to redefine the future of technology and society.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="content-container partner-layout">

          {/* LEFT SIDE */}
          <div className="partner-content animate-slide-up">
            <h2 className="display-lg partner-title">
              Partner with <br />
              <span className="text-primary">Genesis</span>
            </h2>

            <p className="body-lg partner-description">
              TEDxCUSAT 6th Edition is a collective effort. Join us in fueling the next generation of storytellers and disruptors.
            </p>

            <button className="btn-primary mt-2">Enquire Now</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="partner-benefits animate-slide-up" style={{ animationDelay: '0.2s' }}>

            <div className="benefit-card">
              <span className="material-icons benefit-icon">verified</span>
              <p>Reach a highly targeted academic demographic</p>
            </div>

            <div className="benefit-card">
              <span className="material-icons benefit-icon">verified</span>
              <p>Co-create exclusive experiential marketing zones</p>
            </div>

            <div className="benefit-card">
              <span className="material-icons benefit-icon">verified</span>
              <p>Support the spirit of "Ideas Worth Spreading"</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
