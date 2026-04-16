import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, delay = "0s", isLarge = false, image }) => {
  return (
    <div className={`team-card ${isLarge ? 'large' : ''} animate-slide-up`} style={{ animationDelay: delay }}>
      <div className="team-image-container">
        {image ? (
          <img src={image} alt={name} className="team-profile-image" />
        ) : (
          <div className="team-image-placeholder"></div>
        )}
      </div>
      <div className="team-content">
        <h3 className="headline-sm">{name}</h3>
        <span className="label-sm text-primary">{role}</span>
      </div>
    </div>
  );
};

export default TeamCard;
