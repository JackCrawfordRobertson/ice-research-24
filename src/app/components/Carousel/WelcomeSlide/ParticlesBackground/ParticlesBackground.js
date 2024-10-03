"use client";

import React, { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Slim version for performance

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const [inView, setInView] = useState(false);
    const particlesRef = useRef(null); // Reference to the particles container

    // Initialize particles engine when the component mounts
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load slim version for better performance
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Set up Intersection Observer to track when particles are in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setInView(entry.isIntersecting); // Update inView state based on visibility
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (particlesRef.current) {
            observer.observe(particlesRef.current); // Observe the particles container
        }

        return () => {
            if (particlesRef.current) {
                observer.unobserve(particlesRef.current); // Clean up on unmount
            }
        };
    }, []);

    // Particles configuration
    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: "#3da9de", // Adjust the background color as needed
                },
            },
            fpsLimit: 60, // Increase the FPS limit to 60 for smoother animation
            interactivity: {
                events: {
                    onClick: false, // Disable click events
                    onHover: {
                        enable: true, // Enable hover interaction
                        mode: "repulse", // Use repulse mode for hover effect
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 200, // Reduce the distance for repulsion to make it smoother
                        duration: 1, // Shorten the duration for a quicker response
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 200, // Increase link distance slightly for better visuals
                    enable: true,
                    opacity: 0.3, // Make the links more subtle
                    width: 1,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    speed: 1, // Lower the speed for a smoother particle movement
                },
                number: {
                    density: {
                        enable: true,
                        area: 50, // Increase area slightly to reduce the number of overlapping particles
                    },
                    value: 200, // Keep the number of particles moderate for performance
                },
                opacity: {
                    value: 0.8, // Lower opacity for a softer appearance
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: {
                        min: 2,
                        max: 4, // Adjust the size to keep it subtle
                    },
                },
            },
            detectRetina: true, // Enable retina detection for better quality on high-resolution displays
        }),
        []
    );

    return (
        <>
            {init && inView && (
                <Particles
                    id="tsparticles"
                    options={options}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1, // Keep it behind the content
                    }}
                />
            )}
            <div ref={particlesRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
        </>
    );
};

export default ParticlesBackground;