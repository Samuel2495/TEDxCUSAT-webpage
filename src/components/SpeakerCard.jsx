import React from 'react';
import './SpeakerCard.css';

const SpeakerCard = ({ name, role, image, quote, delay = "0s" }) => {
  return (
    <div className="speaker-card animate-slide-up" style={{ animationDelay: delay }}>
      <div className="speaker-image-placeholder">
        {image && <img src={image} alt={name} className="speaker-image" />}
        {/* Placeholder for B&W image with red duotone hover */}
      </div>
      <div className="speaker-content">
        <h3 className="speaker-name">{name}</h3>
        <span className="speaker-role text-primary">{role}</span>
        <blockquote className="speaker-quote">"{quote}"</blockquote>
      </div>
    </div>
  );
};

export default SpeakerCard;
