import React, { useEffect, useRef } from 'react';
import './JourneyRoad.css';

const milestones = [
  { year: "2019", title: "UN-QUINTESSENTIAL", description: "Featuring Dr. M.R. Rajagopal and S. Somnath, the inaugural TEDxCUSAT celebrated humanity and laid a foundation for boundary-pushing innovation." },
  { year: "2021", title: "PAUSE.RESEST.RESTART!!", description: "Post-pandemic, TEDxCUSAT served as a platform for rejuvenation and hope. By sharing diverse visions for the future, the event inspired attendees to rebuild with resilience and renewed ambition." },
  { year: "2022", title: "TRANSCENDENCE: Beyond All Bounds", description: "Through stories of breaking barriers and exploring the unknown, the event inspired the audience to surpass their limits and strive for extraordinary greatness." },
  { year: "2023", title: "DIVERGENCE: Reframing Radicals", description: "Thought leaders challenged traditional norms to inspire innovation, empowering attendees to embrace radical change as a powerful force for progress." },
  { year: "2024", title: "KALEIDOSCOPE", description: "TEDx CUSAT’s Kaleidoscope: Alchemy of Voices was an inspiring success, featuring diverse speakers who captivated the audience through shared insight and powerful connection." }
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

  // Smooth SVG curve wrapping back and forth for 5 milestones
  const svgCurve = "M 50 0 C 90 5, 90 15, 50 20 C 10 25, 10 35, 50 40 C 90 45, 90 55, 50 60 C 10 65, 10 75, 50 80 C 90 85, 90 95, 50 100";

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