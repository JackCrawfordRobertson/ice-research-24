// src/components/WelcomeSlide.js
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Image from 'next/image';
import styles from './WelcomeSlide.module.css';
import ParticlesBackground from './ParticlesBackground/ParticlesBackground';

const WelcomeSlide = ({ setCurrentSlide }) => {
  // Animation variants for Framer Motion
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 3.5 }, // 5-second delay
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 3.5, duration: 0.5, ease: 'easeOut' }, // 5.5-second delay
    },
  };

  const sponsorVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 3.5, duration: 0.7, ease: 'easeOut' }, // 6-second delay
    },
  };

  return (
    <div className={styles.slide}>
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Background Gradient */}
      <div className={styles.backgroundGradient}></div>

      <div className={styles.welcome}>
        {/* Animated Title */}
        <motion.h1 initial="hidden" animate="visible" variants={titleVariants}>
          Welcome <br /> to ICE Research
        </motion.h1>

        {/* Animated Button */}
        <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentSlide(1)}
          >
            Get Started
          </Button>
        </motion.div>

        {/* Animated Sponsor Section */}
        <motion.div
          className={styles.sponsoredSection}
          initial="hidden"
          animate="visible"
          variants={sponsorVariants}
        >
          <p>SPONSORED BY</p>
          <Image
            src="/images/Cvent Logo.png"
            alt="Sponsor Logo"
            width={150}
            height={50}
            className={styles.sponsorLogo}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSlide;