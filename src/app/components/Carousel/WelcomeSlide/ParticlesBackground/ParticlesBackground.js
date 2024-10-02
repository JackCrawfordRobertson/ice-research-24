import React, { useEffect, useMemo, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [isActive, setIsActive] = useState(false);
  const particleRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, [isActive]);

  const handleIntersection = useMemo(
    () =>
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
    []
  );

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
      fpsLimit: 40,
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
    <div
      ref={particleRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        maxWidth: '1200px', // Set max-width for screen size
        margin: '0 auto',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      {isActive && (
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            maxWidth: '1200px', // Constrain particle width
            overflow: 'hidden',
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;