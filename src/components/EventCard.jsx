import React from 'react';
import './EventCard.css';

const EventCard = ({ title, speaker, theme, delay = "0s", alignment = "left", link = "https://google.com" }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`event-card align-${alignment} animate-slide-up`} 
      style={{ animationDelay: delay, display: 'block' }}
    >
      <div className="event-card-content">
        <span className="label-sm text-primary">{theme}</span>
        <h3 className="headline-sm event-title">{title}</h3>
        <p className="body-md event-speaker">{speaker}</p>
        <div className="event-action">
          <span className="material-icons">arrow_forward</span>
        </div>
      </div>
    </a>
  );
};

export default EventCard;
