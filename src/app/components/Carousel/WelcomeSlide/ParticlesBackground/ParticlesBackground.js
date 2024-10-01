'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Slim version for performance

const ParticlesBackground = () => {
  const [isActive, setIsActive] = useState(false);
  const particleRef = useRef(null);

  // Initialize particles when in view
  useEffect(() => {
    if (!isActive) return;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim version for better performance
    });
  }, [isActive]);

  // Memoized observer callback
  const handleIntersection = useMemo(
    () =>
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
    []
  );

  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    if (particleRef.current) observer.observe(particleRef.current);

    return () => {
      if (particleRef.current) observer.unobserve(particleRef.current);
    };
  }, [handleIntersection]);

  const options = useMemo(
    () => ({
      background: { color: { value: '#3da9de' } },
      fpsLimit: 40, // Lower FPS for smoother performance
      interactivity: {
        events: { onClick: false, onHover: false, resize: true },
      },
      particles: {
        color: { value: '#ffffff' },
        links: {
          color: '#ffffff',
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: 'bounce' },
          speed: 1,
        },
        number: {
          density: { enable: true, area: 300 },
          value: 70,
        },
        opacity: { value: 0.8 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: false,
    }),
    []
  );

  return (
    <div ref={particleRef} style={{ position: 'relative', height: '100%', width: '100%' }}>
      {isActive && (
        <Particles
          id="tsparticles"
          options={options}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;