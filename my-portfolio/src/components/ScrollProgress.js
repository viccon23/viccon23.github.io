import React, { useState, useEffect } from 'react';
import '../styles/ScrollProgress.css';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}>
        <span className="scroll-progress-text">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </div>
  );
}

export default ScrollProgress;
