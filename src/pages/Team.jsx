import React from 'react';
import TeamCard from '../components/TeamCard';
import WaveformHero from '../components/WaveformHero';
import './Team.css';

const Team = () => {
  return (
    <div className="team-page">
      <section className="bg-surface text-on-background team-hero">
        <WaveformHero />
        <div className="content-container team-hero-content">
          <h1 className="display-lg animate-slide-up">The Architects of Ideas.</h1>
          <p className="headline-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Behind every red circle is a team of dedicated students, educators, and visionaries working tirelessly to bring "Ideas Worth Spreading" to our campus.
          </p>
        </div>
      </section>

      <section className="team-grid-section">
        <div className="content-container">
          <div className="team-section-header">
            <h2 className="headline-lg">Core Organizers</h2>
          </div>
          <div className="team-grid leadership-grid">
            <TeamCard name="Deva Nandan S" role="Organizer" isLarge={true} delay="0.1s" />
            <TeamCard name="Adithyan Pramod" role="Organizer" isLarge={true} delay="0.2s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Staff & Sponsorship</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Sheena K M" role="Staff Coordinator" delay="0.1s" />
            <TeamCard name="Kevin Jose Edacheril" role="Treasurer" delay="0.2s" />
            <TeamCard name="Durga Sumesh" role="Sponsorship Lead" delay="0.3s" />
            <TeamCard name="Sanjeev Shankar" role="Sponsorship Lead" delay="0.4s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Curation & Outreach</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Shazia Nanakkal" role="Curation Lead" delay="0.1s" />
            <TeamCard name="Anagha" role="Curation Lead" delay="0.2s" />
            <TeamCard name="Dhaliya Noushad" role="Outreach Lead" delay="0.3s" />
            <TeamCard name="Riya Fathima" role="Outreach Lead" delay="0.4s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Production & Media</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Jenoo Liju" role="Production Lead" delay="0.1s" />
            <TeamCard name="Akshay S" role="Production Lead" delay="0.2s" />
            <TeamCard name="Theja Lakshmi" role="Media Lead" delay="0.3s" />
            <TeamCard name="Gopikrishnan P R" role="Media Lead" delay="0.4s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Tech, Content & Ambience</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Abdul Rayif" role="Tech Lead" delay="0.1s" />
            <TeamCard name="Arjun" role="Content Lead" delay="0.2s" />
            <TeamCard name="Athira" role="Ambience Lead" delay="0.3s" />
            <TeamCard name="Asiya Fyroos" role="Ambience Lead" delay="0.4s" />
            <TeamCard name="Shanif K V" role="Ambience Lead" delay="0.5s" />
          </div>
        </div>
      </section>

      <section className="volunteer-cta bg-primary text-on-primary">
        <div className="content-container animate-slide-up">
          <h2 className="display-lg">JOIN THE MOVEMENT</h2>
          <p className="headline-lg">We are always looking for passionate volunteers, photographers, and event staff to join our 2024 production.</p>
          <button className="btn-secondary">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Team;
