import React from 'react';
import JourneyRoad from '../components/JourneyRoad';
import EtherealBackground from '../components/EtherealBackground';
import './Journey.css';

const Journey = () => {
  return (
    <div className="journey-page">
      <EtherealBackground />
      <JourneyRoad />
    </div>
  );
};

export default Journey;
