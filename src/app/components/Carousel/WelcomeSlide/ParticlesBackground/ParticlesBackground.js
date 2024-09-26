// ParticlesBackground.js
'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // Import loadSlim

const ParticlesBackground = () => {
  const [isInView, setIsInView] = useState(false);
  const [init, setInit] = useState(false);
  const particleRef = useRef(null);

  // Initialize the particles engine once when in view
  useEffect(() => {
    if (!isInView || init) return; // Initialize only once when in view

    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Loads slim version of tsparticles
    }).then(() => {
      setInit(true);
    });
  }, [isInView, init]);

  // Intersection Observer to check if ParticlesBackground is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting); // Update isInView based on visibility
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (particleRef.current) {
      observer.observe(particleRef.current);
    }

    return () => {
      if (particleRef.current) {
        observer.unobserve(particleRef.current);
      }
    };
  }, []);

  const particlesLoaded = (container) => {
    console.log('Particles Loaded:', container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: '#3da9de', // Change this to match your background
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Increased area for better distribution
          },
          value: 40, // Reduced particle count for smoother performance
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 3, max: 7 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div ref={particleRef} style={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* Render particles only when in the viewport */}
      {isInView && init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1, // Ensure it's behind other content
          }}
        />
      )}
    </div>
  );
};

export default ParticlesBackground;