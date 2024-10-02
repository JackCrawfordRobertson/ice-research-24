'use client';

import Preloader from './Preloader/Preloader';
import Carousel from './components/Carousel/Carousel';
import styles from "./page.module.css";
import Navbar from './components/NavBar/Navbar.js';
import { useState, useEffect } from 'react';
import MobileMessage from './components/MobileMessage/MobileMessage'; // Import the component

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    console.log("Current Slide changed from", currentSlide, "to", newSlide);
    setCurrentSlide(newSlide);
  };

  const handleResize = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      // Get the height of the navbar if it exists
      const navbarHeight = navbar.offsetHeight;

      // Calculate the available height for the carousel container
      const availableHeight = window.innerHeight - navbarHeight;

      // Set the height dynamically
      const carouselContainer = document.querySelector(`.${styles.carouselContainer}`);
      if (carouselContainer) {
        carouselContainer.style.height = `${availableHeight}px`;
      }
    }
  };

  useEffect(() => {
    // Call handleResize initially to set the height on load
    handleResize();

    // Add event listener to recalculate height on window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Preloader is visible initially */}
      <Preloader />
      <MobileMessage />
      
      {/* Main content displayed after preloader fades out */}
      <div id="mainContent" className={styles.page}>
        {/* Navbar component */}
        <Navbar setCurrentSlide={handleSlideChange} />

        {/* Carousel container that fills available space */}
        <div className={styles.carouselContainer}>
          <Carousel currentSlide={currentSlide} setCurrentSlide={handleSlideChange} />
        </div>
      </div>
    </>
  );
}