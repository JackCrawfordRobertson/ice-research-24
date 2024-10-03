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
            fpsLimit: 30, // Lower the FPS limit to 30
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
                    value: 40, // Reduce from 70 to 40
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