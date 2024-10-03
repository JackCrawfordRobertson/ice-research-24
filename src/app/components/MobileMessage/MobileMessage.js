"use client";

import React, { useState, useEffect } from 'react';
import ParticlesBackground from '../Carousel/WelcomeSlide/ParticlesBackground/ParticlesBackground'; 
import { Button } from '@mui/material'; // Import MUI Button
import styles from './MobileMessage.module.css';

const MobileMessage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile
    };

    handleResize(); // Check size on first render
    window.addEventListener('resize', handleResize); // Add resize listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  if (!isMobile) return null; // Don't render if not mobile

  return (
    <div className={styles.mobileMessageContainer}>
      <ParticlesBackground /> {/* Reuse your particle background */}
      <div className={styles.message}>
        Sorry, but ICE Research is only available on desktop.
      </div>
      <Button 
        variant="contained" 
        color="primary" 
        className={styles.linkedInButton}
        href="https://uk.linkedin.com/company/ice-awards" 
        target="_blank"
      >
        Check out our LinkedIn
      </Button>
      
    </div>
  );
};

export default MobileMessage;