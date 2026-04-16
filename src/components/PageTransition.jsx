import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1600); // Increased to match the 1.4s slash animation + max delay

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <div className={`transition-overlay ${isAnimating ? 'active' : ''}`}>
        <div className="slash slash-1"></div>
        <div className="slash slash-2"></div>
        <div className="slash slash-3"></div>
        <div className="slash slash-4"></div>
        <div className="slash slash-5"></div>
        <div className="slash slash-6"></div>
      </div>
      <div key={location.pathname} className="page-motion-wrapper">
        {children}
      </div>
    </>
  );
};

export default PageTransition;