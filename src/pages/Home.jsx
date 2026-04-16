import React from 'react';
import { Link } from 'react-router-dom';
import WaveformHero from '../components/WaveformHero';
import SpeakerCard from '../components/SpeakerCard';
import Counter from '../components/Counter';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in home-page-active">
      <section className="hero-section">
        <WaveformHero />
        <div className="hero-content">
          <h1 className="display-lg hero-title animate-slide-up">IDEAS WORTH SPREADING</h1>
          <p className="headline-lg hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Join us for a journey through innovation, creativity, and change as we bring together visionaries to ignite global conversations on the local stage.
          </p>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/events" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>Explore Events</Link>
          </div>
        </div>
      </section>

      <section className="spotlight-section bg-surface">
        <div className="content-container">
          <div className="spotlight-grid">
            <div className="spotlight-text animate-slide-up">
              <span className="label-sm text-primary">CURRENT EVENT THEME</span>
              <h2 className="headline-lg">Resonance: Beyond the Surface</h2>
              <p className="body-lg">
                This year, TEDxCUSAT explores the concept of Resonance—how a single idea can ripple across disciplines, cultures, and generations to create lasting impact.
                We bring together 12 visionaries to dismantle the status quo and reconstruct our understanding of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="speakers-section bg-surface-container-low">
        <div className="content-container">
          <h2 className="headline-lg section-title">Past Speakers</h2>
          <p className="body-lg section-subtitle">"The future belongs to those who see it first."</p>

          <div className="speakers-grid">
            <SpeakerCard
              name="Ahmed Al Kaashekh"
              role="Digital Creator and Standup Comedian"
              image="/Speakers/ahmed_al_kaashekh.jpg"
              quote="Innovation is a chaotic dance between curiosity and discipline."
              delay="0.1s"
            />
            <SpeakerCard
              name="Aparna Premraj"
              role="Entrepreneur and Influencer"
              image="/Speakers/aparna_premraj.jpg"
              quote="Design isn't how it looks, it's how it makes you feel."
              delay="0.2s"
            />
            <SpeakerCard
              name="Sujith Vaasudev"
              role="Cinematographer and Film Director"
              image="/Speakers/sujith_vaasudev.jpg"
              quote="Spaces define how we interact. Let's build to connect."
              delay="0.3s"
            />
            <SpeakerCard
              name="Dr. Fahed VP"
              role="Doctor and RFC Champion"
              image="/Speakers/dr_fahad_vp.jpg"
              quote="Spaces define how we interact. Let's build to connect."
              delay="0.4s"
            />
            <SpeakerCard
              name="Sreeraj Gopi"
              role="Innovator and Scientist"
              image="/Speakers/sreeraj_gopi.jpg"
              quote="Spaces define how we interact. Let's build to connect."
              delay="0.5s"
            />
          </div>
        </div>
      </section>

      <section className="impact-section bg-primary text-on-primary">
        <div className="content-container impact-grid">
          <div className="impact-item">
            <span className="display-lg">
              <Counter to={1000000} suffix="+" duration={3} />
            </span>
            <span className="headline-sm">Online Views</span>
          </div>
          <div className="impact-item">
            <span className="display-lg">
              <Counter to={50} suffix="+" duration={2} />
            </span>
            <span className="headline-sm">Student Volunteers</span>
          </div>
          <div className="impact-item">
            <span className="display-lg">
              <Counter to={12} duration={1.5} />
            </span>
            <span className="headline-sm">Visionaries</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
