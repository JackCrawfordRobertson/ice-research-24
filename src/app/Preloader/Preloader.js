'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Set a timer to hide the preloader after 4 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3000); // 4000 milliseconds = 4 seconds

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          className={styles.preloader}
          initial={{ opacity: 1 }} // Initial state: visible
          animate={{ opacity: 1 }} // Remain fully visible during the duration
          exit={{ opacity: 0 }} // Fade out the preloader
          transition={{ duration: 1 }} // 1 second fade-out duration
        >
          {/* Logo animation with spin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }} // Start with lower opacity, scale, and no rotation
            animate={{ opacity: 1, scale: 1, rotate: 0 }} // Animate to full opacity, scale, and a 360-degree spin
            transition={{ duration: .5, ease: "easeInOut" }} // Smooth animation over 2 seconds
          >
            <Image
              src="/images/Stars.svg"  // Path to your logo
              alt="ICE 2024 Research Logo"
              width={200}  // Adjust logo size as needed
              height={200}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}