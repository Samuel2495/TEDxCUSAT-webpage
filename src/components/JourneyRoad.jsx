import React, { useEffect, useRef } from 'react';
import './JourneyRoad.css';

const milestones = [
  { year: "The Beginning", title: "THE SPARK", description: "Founded by three visionary students aiming to bring world-class ideas to our campus. The license was secured after 8 months of rigorous application." },
  { year: "2023", title: "CURRENTS OF CHANGE", description: "Our inaugural main stage event. 100 attendees gathered in the Great Hall to hear 12 local speakers redefine what it means to be a global citizen." },
  { year: "2024", title: "UNBOUNDED", description: "After a year of digital pivots, we returned with our largest production yet. Our talks reached 1M+ views on the global TEDx YouTube channel." },
  { year: "Present", title: "KINETIC LEGACY", description: "Now a cornerstone of campus life, our team of 50+ students continues to push the boundaries of storytelling and live production." }
];

const JourneyRoad = () => {
  const observerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.4, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = observerRefs.current;
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Smooth SVG curve wrapping back and forth
  const svgCurve = "M 50 0 C 90 10, 90 15, 50 25 C 10 35, 10 40, 50 50 C 90 60, 90 65, 50 75 C 10 85, 10 90, 50 100";

  return (
    <div className="journey-2d-container">
      <div className="journey-header animate-slide-up">
        <h1 className="display-lg">JOURNEY</h1>
      </div>
      
      <div className="road-svg-wrapper">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="winding-road-svg">
          {/* Red Borders */}
          <path d={svgCurve} className="road-red-edge" vectorEffect="non-scaling-stroke" />
          {/* Grey Lane Surface */}
          <path d={svgCurve} className="road-grey-surface" vectorEffect="non-scaling-stroke" />
          {/* Dotted Centerline */}
          <path d={svgCurve} className="road-center-dotted" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="milestones-wrapper">
        {milestones.map((m, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`milestone-node ${isLeft ? 'left-align' : 'right-align'}`}
              ref={(el) => (observerRefs.current[idx] = el)}
            >
              <div className="milestone-connection">
                <div className="connector-line"></div>
                <div className="road-node"></div>
              </div>
              <div className="milestone-box">
                <span className="label-sm text-primary">{m.year}</span>
                <h3 className="headline-sm">{m.title}</h3>
                <p className="body-md">{m.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyRoad;