"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for performance

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine when the component mounts
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim version for better performance
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particles configuration
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#3da9de", // Adjust the background color as needed
        },
      },
      fpsLimit: 40, // Lower FPS for smoother performance
      interactivity: {
        events: {
          onClick: false,
          onHover: false,
          resize: true,
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          outModes: {
            default: "bounce",
          },
          speed: 1,
        },
        number: {
          density: {
            enable: true,
            area: 300,
          },
          value: 70,
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 5,
          },
        },
      },
      detectRetina: false,
    }),
    []
  );

  // Render the component once initialization is complete
  if (init) {
    return (
     
        <Particles
          id="tsparticles"
          options={options}
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1000,
          }}
        />
    );
  }

  // Optionally, render a placeholder or null while initializing
  return null;
};

export default ParticlesBackground;