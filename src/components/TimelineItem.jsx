import React from 'react';
import './TimelineItem.css';

const TimelineItem = ({ year, title, description, delay = "0s", isLeft }) => {
  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'} animate-slide-up`} style={{ animationDelay: delay }}>
      <div className="timeline-node"></div>
      <div className="timeline-content">
        <span className="label-sm text-primary">{year}</span>
        <h3 className="headline-sm timeline-title">{title}</h3>
        <p className="body-md">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
