import React from 'react';
import EventCard from '../components/EventCard';
import EtherealBackground from '../components/EtherealBackground';
import './Events.css';

const Events = () => {
  return (
    <div className="events-page">
      <EtherealBackground />
      <section className="events-hero text-on-background">
        <div className="content-container">
          <h1 className="display-lg animate-slide-up">IDEAS THAT STAY WITH YOU.</h1>
          <p className="headline-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Explore our constellation of ideas. Interact with the network of breakthrough moments and radical perspectives shared on our stage.
          </p>
        </div>
      </section>

      <section className="events-network-section bg-background">
        <div className="content-container network-container">
          {/* Vertical connecting line */}
          <div className="network-line"></div>

          <div className="network-grid">
            <EventCard
              title="Genesis"
              speaker="Marcus Thorne"
              theme="From Concept to Impact"
              delay="0.1s"
              alignment="left"
              link="https://forms.gle/QRR8bxC9ceQ9bvcZ6"
            />
            {/* Empty space for alternating layout */}
            <div className="empty-node"></div>

            <div className="empty-node"></div>
            <EventCard
              title="Kaleidoscope '26"
              speaker="Dr. Elena Sterling"
              theme="Technology"
              delay="0.2s"
              alignment="right"
              link="https://forms.gle/cKiXTeED17Gt9XRB8"
            />

            <EventCard
              title="Designing for Silence"
              speaker="Sarah Jenkins"
              theme="Architecture"
              delay="0.3s"
              alignment="left"
              link="https://google.com"
            />
            <div className="empty-node"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
