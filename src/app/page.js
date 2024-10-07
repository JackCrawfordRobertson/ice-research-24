'use client';

import Preloader from './Preloader/Preloader';
import Carousel from './components/Carousel/Carousel';
import CarouselMobile from './components/MobileMessage/CarouselMobile/MobileCarousel';
import styles from "./page.module.css";
import Navbar from './components/NavBar/Navbar.js';
import { useState, useEffect } from 'react';
import MobileMessage from './components/MobileMessage/MobileMessage';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (newSlide) => {
    console.log("Current Slide changed from", currentSlide, "to", newSlide);
    setCurrentSlide(newSlide);
  };

  const handleResize = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      const availableHeight = window.innerHeight - navbarHeight;
      const carouselContainer = document.querySelector(`.${styles.carouselContainer}`);
      if (carouselContainer) {
        carouselContainer.style.height = `${availableHeight}px`;
      }
    }
    // Determine if the current view is mobile
    setIsMobile(window.innerWidth <= 768);  // Adjust breakpoint as necessary
  };

  useEffect(() => {
    handleResize();  // Call handleResize initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Preloader />

      <div id="mainContent" className={styles.page}>
        {/* Conditionally render Navbar for desktop only */}
        {!isMobile && (
          <Navbar setCurrentSlide={handleSlideChange} currentSlide={currentSlide} /> 
        )}

        <div className={styles.carouselContainer}>
          {/* Conditionally render the correct carousel based on device */}
          {isMobile ? (
            <CarouselMobile currentSlide={currentSlide} setCurrentSlide={handleSlideChange} />
          ) : (
            <Carousel currentSlide={currentSlide} setCurrentSlide={handleSlideChange} />
          )}
        </div>
      </div>
    </>
  );
}