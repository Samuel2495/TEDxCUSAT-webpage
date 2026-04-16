import React from 'react';
import TeamCard from '../components/TeamCard';
import WaveformHero from '../components/WaveformHero';
import './Team.css';

// Import Images
import deva_nandan from '../assets/members/deva_nandan.jpeg';
import adityan_pramod from '../assets/members/adityan_pramod.jpeg';
import sheena_km from '../assets/members/sheena_km.jpeg';
import kevin from '../assets/members/kevin.jpeg';
import durga_sumesh from '../assets/members/Durga_Sumesh.jpeg';
import sanjeev_shankar from '../assets/members/sanjeev_shankar.jpeg';
import shazia from '../assets/members/shazia.jpeg';
import anagha from '../assets/members/anagha.jpeg';
import dhaliya_noushad from '../assets/members/dhaliya_noushad.jpeg';
import riya_fathima from '../assets/members/riya_fathima.jpeg';
import jenoo_liju from '../assets/members/jenoo_liju.jpeg';
import akshay from '../assets/members/akshay.jpeg';
import theja_lakshmi from '../assets/members/theja_lakshmi.jpeg';
import gopalakrishnan from '../assets/members/gopalakrishnan.png';
import abdul_rayif from '../assets/members/Abdul_rayif.jpeg';
import arjun from '../assets/members/arjun.jpeg';
import athira from '../assets/members/athira.jpeg';
import asiya_fyroos from '../assets/members/asiya_fyroos.jpeg';
import shanif from '../assets/members/shanif.jpeg';

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
          <div className="team-grid members-grid">
            <TeamCard name="Deva Nandan S" role="Organizer" image={deva_nandan} delay="0.1s" />
            <TeamCard name="Adithyan Pramod" role="Organizer" image={adityan_pramod} delay="0.2s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Staff & Sponsorship</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Sheena K M" role="Staff Coordinator" image={sheena_km} delay="0.1s" />
            <TeamCard name="Kevin Jose Edacheril" role="Treasurer" image={kevin} delay="0.2s" />
            <TeamCard name="Durga Sumesh" role="Sponsorship Lead" image={durga_sumesh} delay="0.3s" />
            <TeamCard name="Sanjeev Shankar" role="Sponsorship Lead" image={sanjeev_shankar} delay="0.4s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Curation & Outreach</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Shazia Nanakkal" role="Curation Lead" image={shazia} delay="0.1s" />
            <TeamCard name="Anagha" role="Curation Lead" image={anagha} delay="0.2s" />
            <TeamCard name="Dhaliya Noushad" role="Outreach Lead" image={dhaliya_noushad} delay="0.3s" />
            <TeamCard name="Riya Fathima" role="Outreach Lead" image={riya_fathima} delay="0.4s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Production & Media</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Jenoo Liju" role="Production Lead" image={jenoo_liju} delay="0.1s" />
            <TeamCard name="Akshay S" role="Production Lead" image={akshay} delay="0.2s" />
            <TeamCard name="Theja Lakshmi" role="Media Lead" image={theja_lakshmi} delay="0.3s" />
            <TeamCard name="Gopikrishnan P R" role="Media Lead" image={gopalakrishnan} delay="0.4s" />
          </div>

          <div className="team-section-header">
            <h2 className="headline-lg">Tech, Content & Ambience</h2>
          </div>
          <div className="team-grid members-grid">
            <TeamCard name="Abdul Rayif" role="Tech Lead" image={abdul_rayif} delay="0.1s" />
            <TeamCard name="Arjun" role="Content Lead" image={arjun} delay="0.2s" />
            <TeamCard name="Athira" role="Ambience Lead" image={athira} delay="0.3s" />
            <TeamCard name="Asiya Fyroos" role="Ambience Lead" image={asiya_fyroos} delay="0.4s" />
            <TeamCard name="Shanif K V" role="Ambience Lead" image={shanif} delay="0.5s" />
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
