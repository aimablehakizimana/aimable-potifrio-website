
import React, { useState, useEffect, useMemo } from 'react';
import { Star } from '../types';

const GalaxyBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const numStars = 150; // Adjust for density

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // vw
          y: Math.random() * 100, // vh
          size: Math.random() * 2 + 0.5, // px
          opacity: Math.random() * 0.5 + 0.3,
          animationDuration: Math.random() * 50 + 50, // s for slow drift
          animationDelay: Math.random() * 5, // s
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  const starElements = useMemo(() => stars.map(star => (
    <div
      key={star.id}
      className="absolute rounded-full bg-slate-400"
      style={{
        left: `${star.x}vw`,
        top: `${star.y}vh`,
        width: `${star.size}px`,
        height: `${star.size}px`,
        opacity: star.opacity,
        animation: `twinkle ${star.animationDuration / 10}s infinite alternate ease-in-out, drift ${star.animationDuration}s infinite linear`,
        animationDelay: `${star.animationDelay}s, ${star.animationDelay}s`,
      }}
    />
  )), [stars]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes drift {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px); }
          50% { transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px); }
          75% { transform: translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px); }
          100% { transform: translate(0,0); }
        }
      `}</style>
      {starElements}
    </div>
  );
};

export default GalaxyBackground;
